---
title: "Why not Seurat?"
description: "Why we switched from using the Seurat SCTransform workflow to the Bioconductor SingleCellExperiment ecosystem."
lead: "Why we switched from using the <i>Seurat SCTransform</i> workflow to the Bioconductor <i>SingleCellExperiment</i> ecosystem."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "general"
weight: 120
toc: true
---


### Empty droplet detection

The [emptyDrops](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1662-y) function from Bioconductor retains distinct cell types that simple knee point thresholds discard. 

Although Cell Ranger V3 has also [adapted emptyDrops](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/algorithms/overview), Dseqr uses [kallisto bustools](https://www.biorxiv.org/content/10.1101/673285v2) which is up to 51x faster than Cell Ranger and runs in constant memory. 

Seurat doesn't provide any specific functionality for detecting empty droplets. 

### Cluster based PC selection

Dseqr uses [getClusteredPCs](http://bioconductor.org/books/release/OSCA/dimensionality-reduction.html) to automate the selection of principle components (PCs) for clustering. From the OSCA handbook:

> "This strategy is the most pragmatic as it directly addresses the role of the bias-variance trade-off in downstream analyses, specifically clustering. There is no need to preserve biological signal beyond what is distinguishable in later steps. However, it involves strong assumptions about the nature of the biological differences between subpopulations - and indeed, discrete subpopulations may not even exist in studies of continuous processes like differentiation. It also requires repeated applications of the clustering procedure on increasing number of PCs, which may be computational expensive."


### Pairwise marker gene detection

The [Bioconductor workflow](http://bioconductor.org/books/release/OSCA/marker-detection.html#pairwise-tests-between-clusters) determines marker genes by comparing a cluster of interest to each other cluster and then performing a meta-analysis over all pairwise comparisons. In Seurat, a cluster of interest is compared to all other cells. Through personal observation, the Bioconductor workflow pulls out robust markers that are sometimes buried in Seurat. Here is the rationale from the OSCA handbook for pairwise methods:

> "We intentionally use pairwise comparisons between clusters rather than comparing each cluster to the average of all other cells. The latter approach is sensitive to the population composition, potentially resulting in substantially different sets of markers when cell type abundances change in different contexts. In the worst case, the presence of a single dominant subpopulation will drive the selection of top markers for every other cluster, pushing out useful genes that can resolve the various minor subpopulations."


### Batch correction for pseudobulk

For both workflows, integration is only used to align cells into the same cluster. The corrected values do not get used in any downstream analyses. However, the [OSCA workflow](http://bioconductor.org/books/release/OSCA/integrating-datasets.html) implements library size adjustment between samples with *multiBatchNorm*.

*multiBatchNorm* protects against situations where, for example, a particular transcript is detected in one sample but not another due to systematically smaller library sizes. Seurat does not have comparable functionality.

### Pseudobulk differential expression

The *SingleCellExperiment* ecosystem provides [utilities](http://bioconductor.org/books/release/OSCA/multi-sample-comparisons.html) to run pseudo-bulk differential expression analyses per cluster when there are multiple control and test samples. The OSCA handbook provides the following justifications for pseudo-bulking:

> * Larger counts are more amenable to standard DE analysis pipelines designed for bulk RNA-seq data. Normalization is more straightforward and certain statistical approximations are more accurate [...] 
> * Collapsing cells into samples reflects the fact that our biological replication occurs at the sample level. Each sample is represented no more than once for each condition, avoiding problems from unmodelled correlations between samples. Supplying the per-cell counts directly to a DE analysis pipeline would imply that each cell is an independent biological replicate, which is not true from an experimental perspective.
> * Variance between cells within each sample is masked, provided it does not affect variance across (replicate) samples. This avoids penalizing DEGs that are not uniformly up- or down-regulated for all cells in all samples of one condition. Masking is generally desirable as DEGs - unlike marker genes - do not need to have low within-sample variance to be interesting, e.g., if the treatment effect is consistent across replicate populations but heterogeneous on a per-cell basis. (Of course, high per-cell variability will still result in weaker DE if it affects the variability across populations, while homogeneous per-cell responses will result in stronger DE due to a larger population-level log-fold change. These effects are also largely desirable.)

Importantly, pseudobulk methods outperform non-pseudobulk methods when [benchmarked](https://www.biorxiv.org/content/biorxiv/early/2019/07/26/713412.full.pdf). 

### Ambient expression

The OSCA handbook provides [recommendations](http://bioconductor.org/books/release/OSCA/multi-sample-comparisons.html#ambient-problems) for dealing with ambient expression.

Ambient expression arrises from differential lysis between samples into the cell suspension. For example: RBCs lysing → Hemoglobin detected in all droplets → Hemoglobin shows up as differentially expressed as compared to samples without this issue. Seurat does not provide any recommendations for handling ambient expression.


### SCTransform downsides

Some [analysis](https://ltla.github.io/SingleCellThoughts/general/transformation.html) from the authors of the Bioconductor workflow of potential and real downsides of *SCTransform*. In particular:

> The transformed values from sctransform exhibit no relation to the original scale of the (log-)counts. This is not a problem for exploratory analyses but makes it difficult to interpret differential expression analyses [...]</br></br>
> {{< img-simple src="sctransform.png" alt="Bulk Data Import" class="border-1" >}}


### Time and memory

The Seurat *SCTransform* workflow generates a non-sparse expression matrix. This makes integration of multiple samples very slow and requires large amounts of RAM.