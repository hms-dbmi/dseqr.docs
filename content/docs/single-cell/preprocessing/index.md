---
title: "Preprocessing"
description: "Preprocessing that happens to added single-cell datasets."
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

{{< alert icon="💡" text="kallisto bustools is up to <a href='https://twitter.com/lpachter/status/1140663795435495432?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1140663795435495432%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Flpachter2Fstatus2F1140663795435495432widget%3DTweet'>51 times faster than Cell Ranger</a> and runs in constant memory." >}}

### Droplet processing

{{< alert icon="💡" text="Empty droplets are detected using <a href='https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1662-y'>emptyDrops</a>, which retains distinct cell types that simple knee point thresholds discard. emptyDrops has also been <a href='https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/algorithms/overview'>adapted by Cell Ranger V3</a>." >}}


### Feature selection

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/feature-selection.html#feature-selection-subsetting'>Highly variable genes</a> are within the top 10% of biological variance." >}}

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/feature-selection.html#apriori-hvgs'>A priori</a> genes of interest can also be specified by <a href='/docs/single-cell/subsetting#custom-genes-for-clustering'>subsetting</a>." >}}

### Dimensionality reduction and clustering

{{< alert icon="💡" text="The top 30 principle components are used to detect clusters and generate UMAP plots." >}}

{{< alert icon="💡" text="Clustering uses the leiden algorithm and the resolution parameter can be adjusted." >}}


### Marker genes

{{< alert icon="💡" text="<a href='http://bioconductor.org/books/release/OSCA/marker-detection.html#using-the-wilcoxon-rank-sum-test'>Wilcoxon rank sum tests</a> calculated with <a href='https://www.biorxiv.org/content/10.1101/653253v1'>presto</a> are used to sort up-regulated marker genes for each cluster." >}}