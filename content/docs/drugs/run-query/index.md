---
title: "Run Queries"
description: "How to run drug and genetic perturbation queries."
lead: "How to run drug and genetic perturbation queries."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "drugs"
weight: 410
toc: true
---

### Select a query signature

To specify a query signature, select either an integrated single-cell dataset or a bulk dataset. If you select a single-cell dataset, select a cluster to use as your query signature. For bulk datasets, select a test and control group to form your query signature:

{{< img-simple src="drugs-query.png" alt="Select Signature" class="border-1" >}}

{{< alert icon="💡" text="For integrated single-cell datasets, test and control groups are defined during integration." >}}

### Select perturbation study

Next select a perturbation study to explore:

{{< img-simple src="drugs-study.png" alt="Select Study" class="border-1" >}}

The differential expression of genes from your query signature are shown:

{{< img-simple src="drugs-query_genes.png" alt="Query Genes" class="border-1" >}}

{{< alert icon="💡" text="The query signature is the top 200 most differentially expressed genes that were also measured in the reference database." >}}

### Explore results

A sorted table of top results is shown:

{{< img-simple src="drugs-table.png" alt="Query Genes" class="border-1" >}}

{{< alert icon="💡" text="Signatures for the same compound but different dose or cell-line are shown in a single row." >}}

{{< alert icon="💡" text="Hover a correlation point to view individual correlation values and signature details." >}}

{{< alert icon="💡" text="For L1000 signatures, only the top 1500 results are shown. You can download the full query results if a compound of interest is not in the top results." >}}

You can change the table sorting  and filter for specific cell lines by clicking the advanced options toggle:

{{< img-simple src="drugs-advanced.png" alt="Query Genes" class="border-1" >}}

### Plot perturbation effect

To view the predicted effect of a perturbation on the query genes, *Select a perturbation for plot:*

{{< img-simple src="drugs-pert-plot.png" alt="Plot Perturbation" class="border-1" >}}

{{< alert icon="💡" text="Arrows showing perturbation effects start at query effect size values and end at the sum of query and perturbation effect sizes." >}}


### Perturbation as query

You can use expression profiles from the reference datasets to query for similar and opposing signatures in the reference datasets. 

To do so either search for a signature in the *Select a dataset or query signature* input or right click on a correlation point and click *Load as query*:

{{< img-simple src="drugs-load-pert.png" alt="Plot Perturbation" class="border-1" >}}