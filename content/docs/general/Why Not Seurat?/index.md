---
title: "Why not Seurat?"
description: ""
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


### emptyDrops

Seurat doesn't provide any functionality for detecting empty droplets. The [emptyDrops](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1662-y) function from Bioconductor has become the standard and has been [adapted by](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/algorithms/overview) Cell Ranger.

### getClusteredPCs

[getClusteredPCs](https://osca.bioconductor.org/dimensionality-reduction.html) is used to choose number of principle components (PCs) for clustering. It maximizes the number of distinct sub-populations up until the point that additional noise reduces resolution. The downside of *getClusteredPCs* is that it is quite slow as it checks all possible number of PCs up to 50 for the number of clusters produced.


### Marker gene detection

The [Bioconductor workflow](http://bioconductor.org/books/release/OSCA/marker-detection.html#pairwise-tests-between-clusters) determines marker genes by comparing a cluster of interest to each other cluster and then performs a meta-analysis over all pairwise comparisons. In Seurat, a cluster of interest is compared to all other cells. My personal observations are that the Bioconductor workflow pulls out robust markers that are sometimes buried in Seurat. Here is the rationale from the OSCA handbook for pairwise methods:

*"We intentionally use pairwise comparisons between clusters rather than comparing each cluster to the average of all other cells. The latter approach is sensitive to the population composition, potentially resulting in substantially different sets of markers when cell type abundances change in different contexts. In the worst case, the presence of a single dominant subpopulation will drive the selection of top markers for every other cluster, pushing out useful genes that can resolve the various minor subpopulations."*


### multiBatchNorm

For both workflows, integration is only used to align cells into the same cluster. The corrected values do not get used in any downstream analyses. 

The [OSCA workflow](http://bioconductor.org/books/release/OSCA/integrating-datasets.html) adjusts between samples for library size with *multiBatchNorm*. This should protect against situations where, for example, a particular transcript is detected in one sample but not another because the second sample had systematically smaller library sizes and so the transcript in question was below the detection threshold. Seurat does not have comparable functionality.

### Pseudobulk differential expression

The *SingleCellExperiment* ecosystem provides [utilities](https://osca.bioconductor.org/multi-sample-comparisons.html) to run pseudo-bulk differential expression analyses per cluster when there are multiple control and test samples. 

This allows you to use standard bulk RNA-Seq pipelines and the level of replication is at the sample level instead of assuming every cell is an independent biological replicate. This has a couple of nice properties including reasonable p-values. 

Importantly, pseudobulk outperforms non-pseudobulk methods when [benchmarked](https://www.biorxiv.org/content/biorxiv/early/2019/07/26/713412.full.pdf). 

### Downsides of SCTransform

Some [examples](https://ltla.github.io/SingleCellThoughts/general/transformation.html) from the authors of the Bioconductor workflow of where *SCTransform* can cause issues.

### Ambient expression

The OSCA handbook provides [recommendations](http://bioconductor.org/books/release/OSCA/multi-sample-comparisons.html#ambient-problems) for dealing with ambient expression.

Ambient expression arrises from differential lysis between samples into the cell suspension. For example: RBCs lysing  → Hemoglobin detected in all cells  → Hemoglobin shows up as differentially expressed as compared to a sample without this issue. 

### Time and memory

The Seurat SCTransform workflow generates a non-sparse expression matrix. This makes integration of multiple samples very slow and requires large amounts of RAM.