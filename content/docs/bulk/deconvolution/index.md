---
title: "Cell Type Deconvolution"
description: "Estimate cell type proportions in bulk samples using a single-cell dataset."
lead: "Estimate cell type proportions in bulk samples using a single-cell dataset."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "bulk"
weight: 340
toc: true
---

{{< alert icon="💡" text="Deconvolution can be run with <a href='https://www.nature.com/articles/s41467-018-08023-x'>MuSiC</a> (multi-sample only) or <a href='https://www.nature.com/articles/s41467-019-10802-z'>DWLS</a>." >}}

### Run deconvolution

To run deconvolution, select a bulk dataset and click the cell-type deconvolution toggle:

{{< img-simple src="bulk-deconvolution.png" alt="Bulk Deconvolution" class="border-1" >}}

Next select a reference single-cell dataset and, optionally, clusters that you want to exclude:

{{< img-simple src="bulk-run-deconvolution.png" alt="Bulk Deconvolution" class="border-1" >}}

Click *Submit cell-type deconvolution* to begin. 

{{< alert icon="💡" text="Non-human reference single-cell datasets are first mapped to human homologs." >}}


When complete, you will see a plot of the estimated proportion of each cell-type in each bulk sample, summarized by bulk sample groups:

{{< img-simple src="bulk-deconvolution-plot.png" alt="Bulk Deconvolution" class="border-1" >}}

{{< alert icon="💡" text="If a comparison group is specified, FDR values for the comparison are shown in the plot." >}}

{{< alert icon="💡" text="You can download the deconvolution results by clicking the <i>download plot data</i> button in the top right (see image above)." >}}