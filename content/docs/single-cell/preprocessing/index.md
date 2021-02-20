---
title: "Preprocessing"
description: ""
lead: "Preprocessing that happens to added datasets."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu: 
  docs:
    parent: "single-cell"
weight: 220
toc: true
---

### General

The [OSCA](http://bioconductor.org/books/release/OSCA/) handbook was used to guide preprocessing choices. 

### Pseudoalignment

{{< alert icon="💡" text="kallisto v0.46.0 is used for pseudo-quantification with an index built using GRCh38 release 94." >}}

### Droplet processing

{{< alert icon="💡" text="Empty droplets are detected using <a href='http://bioconductor.org/books/release/OSCA/droplet-processing.html#qc-droplets'>emptyDrops</a>. Cell Ranger version 3 also <a href='https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/algorithms/overview'>uses</a> an alogithm based on emptyDrops." >}}


### Feature selection

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/feature-selection.html#feature-selection-subsetting'>Highly variable genes</a> are within the top 10% of biological variance." >}}

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/feature-selection.html#apriori-hvgs'>A priori</a> genes of interest can also be specified by <a href='/docs/single-cell/subsetting#custom-genes-for-clustering'>subsetting</a>." >}}

### Dimensionality reduction and clustering

{{< alert icon="💡" text="The number of principle components to detect clusters and generate TSNE plots is chosen <a href='http://bioconductor.org/books/release/OSCA/dimensionality-reduction.html#based-on-population-structure'>based on population structure</a>." >}}

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/clustering.html#other-parameters'>Clustering</a> uses the walktrap algorithm for datasets with less than 10k cells (OSCA default) and louvain clustering for datasets with more than 10k cells (Seurat default)." >}}


### Marker genes

{{< alert icon="💡" text="Pairwise <a href='http://bioconductor.org/books/release/OSCA/marker-detection.html#using-the-wilcoxon-rank-sum-test'>Wilcoxon rank sum tests</a> are used to sort up-regulated marker genes for each cluster." >}}