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

Seurat doesn't provide any functionality for detecting empty droplets. 

The [emptyDrops](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1662-y) function from Bioconductor has become the standard and has been [adapted by](https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/algorithms/overview) Cell Ranger.

### Cluster based PC selection

Dseqr uses [getClusteredPCs](http://bioconductor.org/books/release/OSCA/dimensionality-reduction.html) as a pragmatic way to choose number of principle components (PCs) for clustering. It attempts to maximize the number of distinct sub-populations up until the point that additional noise reduces resolution. The downside of *getClusteredPCs* is that it is quite slow as it checks all possible number of PCs up to 50 for the number of clusters produced.


### Pairwise marker gene detection

The [Bioconductor workflow](http://bioconductor.org/books/release/OSCA/marker-detection.html#pairwise-tests-between-clusters) determines marker genes by comparing a cluster of interest to each other cluster and then performing a meta-analysis over all pairwise comparisons. In Seurat, a cluster of interest is compared to all other cells. Through personal observation, the Bioconductor workflow pulls out robust markers that are sometimes buried in Seurat. Here is the rationale from the OSCA handbook for pairwise methods:

> "We intentionally use pairwise comparisons between clusters rather than comparing each cluster to the average of all other cells. The latter approach is sensitive to the population composition, potentially resulting in substantially different sets of markers when cell type abundances change in different contexts. In the worst case, the presence of a single dominant subpopulation will drive the selection of top markers for every other cluster, pushing out useful genes that can resolve the various minor subpopulations."


### Batch correction for pseudobulk

For both workflows, integration is only used to align cells into the same cluster. The corrected values do not get used in any downstream analyses. However, the [OSCA workflow](http://bioconductor.org/books/release/OSCA/integrating-datasets.html) implements library size adjustment between samples with *multiBatchNorm*.

*multiBatchNorm* protects against situations where, for example, a particular transcript is detected in one sample but not another due to systematically smaller library sizes. Seurat does not have comparable functionality.

### Pseudobulk differential expression

The *SingleCellExperiment* ecosystem provides [utilities](https://osca.bioconductor.org/multi-sample-comparisons.html) to run pseudo-bulk differential expression analyses per cluster when there are multiple control and test samples. 

Pseudobulk analyses use standard bulk RNA-seq pipelines where the level of replication is the sample instead of assuming every cell is an independent biological replicate. This results in reasonable p-values. 

Importantly, pseudobulk methods outperform non-pseudobulk methods when [benchmarked](https://www.biorxiv.org/content/biorxiv/early/2019/07/26/713412.full.pdf). 

### SCTransform downsides

Some [examples](https://ltla.github.io/SingleCellThoughts/general/transformation.html) from the authors of the Bioconductor workflow of where *SCTransform* can cause issues.

### Ambient expression

The OSCA handbook provides [recommendations](http://bioconductor.org/books/release/OSCA/multi-sample-comparisons.html#ambient-problems) for dealing with ambient expression.

Ambient expression arrises from differential lysis between samples into the cell suspension. For example: RBCs lysing → Hemoglobin detected in all droplets → Hemoglobin shows up as differentially expressed as compared to samples without this issue. Seurat does not provide any recommendations for ambient expression.

### Time and memory

The Seurat SCTransform workflow generates a non-sparse expression matrix. This makes integration of multiple samples very slow and requires large amounts of RAM.