---
title: "Quality Control"
description: ""
lead: "How to exclude low quality cells."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu: 
  docs:
    parent: "single-cell"
weight: 210
toc: true
---

### During dataset creation

The first opportunity for QC is when adding a new dataset:

{{< img-simple src="qc-create.png" alt="QC Create" class="border-1" >}}

{{< alert icon="💡" text="Metric descriptions:</br></br>- <b>none</b>: only remove empty droplets</br>- <b>all</b>: use all metrics</br>- <b>all_and_none</b> (default): both of above - creates datasets QC0 and QC1</br>- <b>low_lib_size</b>: remove cells that have low total counts</br>- <b>low_n_features</b>: remove cells that have few genes with counts</br>- <b>high_mito_percent</b>: remove cells with high mitochondrial percent</br>- <b>low_ribo_percent</b>: remove cells with low ribosomal percent</br>- <b>high_doublet_score</b>: remove cells with high doublet score</br></br> The above metrics are calculated using <a href='http://bioconductor.org/books/release/OSCA/quality-control.html#quality-control-outlier'>outlier detection</a> and applied prior to <a href='http://bioconductor.org/books/release/OSCA/normalization.html'>normalization</a>." >}}


### After dataset creation

For an existing dataset, *QC Score* and *Boolean Features* can be plotted just like genes: 

{{< img-simple src="qc-feature.png" alt="QC Feature" class="border-1" >}}

{{< alert icon="💡" text="QC features are shown first when no cluster is selected" >}}

You can also plot and save new custom metrics. Saved boolean features can be used for further QC by [subsetting]({{< ref "/docs/single-cell/subsetting" >}}).

{{< img-simple src="qc-custom.png" alt="QC Custom" class="border-1" >}}

{{< alert icon="💡" text="Custom metric examples:</br></br>- <b>PF4>2.2</b>: PF4 logcounts higher than 2.2</br>- <b>PF4&IGF1</b>: both PF4 and IGF1 are expressed</br>- <b>PF4>2&IGF1>1</b>: both have logcounts above specific threshold</br>- <b>PF4>2.2&(cluster==1)</b>: PF4 logcounts higher than 2.2 in cluster 1</br>- <b>PF4*IGF1>2</b>: multiplication of PF4 and IGF1 logcounts are above 2" >}}

