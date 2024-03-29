---
title: "Cluster Annotation"
description: "How to annotate single-cell clusters."
lead: "How to annotate clusters."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "single-cell"
weight: 230
toc: true
---

{{< alert icon="💡" text="Automated annotation is also a feature of <a href='/docs/single-cell/reference-based/'>reference-based analysis</a>." >}}

### Label transfer

A good starting point for cluster annotation is to transfer labels from an existing dataset. To do so, click the label transfer toggle and select a dataset to transfer labels from:

{{< img-simple src="annotate-transfer.png" alt="Label Transfer" class="border-1" >}}

{{< alert icon="💡" text="Label transfer uses <a href='http://bioconductor.org/books/3.14/OSCA.basic/cell-type-annotation.html'>SingleR</a> and includes external references from <a href='https://bioconductor.org/packages/release/data/experiment/manuals/celldex/man/celldex.pdf'>celldex</a>." >}}

{{< alert icon="💡" text="For cross-species transfer, datasets are first mapped to human homologs." >}}


### Change cluster name

To manually change a cluster name toggle the rename cluster button:

{{< img-simple src="annotation-manual.png" alt="Manual Annotation" class="border-1" >}}

Then type a new name for the cluster and click the rename cluster button:

{{< img-simple src="annotation-rename.png" alt="Rename Cluster" class="border-1" >}}

{{< alert icon="💡" text="To abort rename: delete <i>New cluster name</i> text and click <i>Rename cluster</i> button." >}}

### Sorting marker genes

Selecting a cluster will sort marker genes for that cluster:

{{< img-simple src="annotation-markers.png" alt="Sort Markers" class="border-1" >}}

To compare the selected cluster to one other cluster, click the toggle single group comparisons button and select a comparison:

{{< img-simple src="annotation-compare.png" alt="Rename Cluster" class="border-1" >}}

Comparing two clusters is particularly useful for distinguishing closely related clusters and for confirming doublet clusters.

{{< alert icon="💡" text="To exit two-cluster comparisons, click the toggle button again." >}}

### Exploring marker genes

Selecting a gene will plot its logcounts in cells and clusters:

{{< img-simple src="annotation-plots.png" alt="Plot Feature" class="border-1" >}}

### External gene data

Click the BioGPS toggle button to view the relative expression of the selected gene in the groups from the BioGPS dataset:

{{< img-simple src="annotation-biogps.png" alt="Plot Feature" class="border-1" >}}

{{< alert icon="💡" text="Clicking the gene name link will take you to the Gene Cards entry for the selected gene." >}}