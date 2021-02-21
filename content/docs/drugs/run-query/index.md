---
title: "Run Queries"
description: ""
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

### Select query signature

To specify a query signature, select either an integrated single-cell dataset or a bulk dataset. Then select either a cluster (single-cell) or a test and control group (bulk):

{{< img-simple src="drugs-query.png" alt="Select Signature" class="border-1" >}}

{{< alert icon="💡" text="For integrated single-cell datasets, test and control groups are defined during integration." >}}

### Select perturbation study

Next select a perturbation study to explore:

{{< img-simple src="drugs-study.png" alt="Select Study" class="border-1" >}}

The genes from your query signature are shown:

{{< img-simple src="drugs-query_genes.png" alt="Query Genes" class="border-1" >}}

{{< alert icon="💡" text="The query signature is the top 200 most differentially expressed genes that were also measured in the reference database." >}}

### Explore results

A sorted table of top results is shown:

{{< img-simple src="drugs-table.png" alt="Query Genes" class="border-1" >}}

{{< alert icon="💡" text="Signatures for the same compound but different dose or cell-line are shown in a single row." >}}

{{< alert icon="💡" text="Hover a correlation point to view individual correlation values and signature name." >}}

{{< alert icon="💡" text="For L1000 signatures, only the top 1500 results are shown. You can download the full query results if a compound of interest is not in the top results." >}}

### Plot perturbation effect

To view the predicted effect of a query result on the query genes, *Select a perturbation for plot:*

{{< img-simple src="drugs-pert-plot.png" alt="Plot Perturbation" class="border-1" >}}

{{< alert icon="💡" text="Perturbation effect arrows start at query effect size values and end at the sum of query and perturbation effect sizes." >}}

{{< alert icon="💡" text="Perturbation effect arrows start at query effect size values and end at the sum of query and perturbation effect sizes." >}}

### Advanced options


### Perturbation as query