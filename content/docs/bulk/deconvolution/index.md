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

{{< alert icon="💡" text="Cell type deconvolution is performed by <a href='https://academic.oup.com/bioinformatics/article/35/12/2093/5165376'>dtangle</a>." >}}

### Run deconvolution

To run deconvolution, select a bulk dataset and click the cell-type deconvolution toggle:

{{< img-simple src="bulk-deconvolution.png" alt="Bulk Deconvolution" class="border-1" >}}

Next select a reference single-cell dataset and clusters that you want to use to estimate cell-type proportions:

{{< img-simple src="bulk-run-deconvolution.png" alt="Bulk Deconvolution" class="border-1" >}}

Click *Submit cell-type deconvolution* to begin. 

{{< alert icon="💡" text="Non-human reference single-cell datasets and first mapped to human homologs." >}}


When complete, you will see a plot of the estimated proportion of each cell-type in each bulk sample, summarized by bulk sample groups:

{{< img-simple src="bulk-deconvolution-plot.png" alt="Bulk Deconvolution" class="border-1" >}}

{{< alert icon="💡" text="You can download the deconvolution results by clicking the <i>download plot data</i> button in the top right (see image above)." >}}