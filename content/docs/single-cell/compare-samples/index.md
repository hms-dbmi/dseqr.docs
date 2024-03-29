---
title: "Multi Sample Comparison"
description: "Compare expression, abundance, and pathways between test and control samples."
lead: "Compare expression, abundance, and pathways between test and control samples."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu: 
  docs:
    parent: "single-cell"
weight: 260
toc: true
---

{{< img-simple src="multi-abundance.png" alt="Differential Abundance" class="border-1" >}}

## Select groups to compare

To run differential analyses between test and control samples:
1. select an integrated **dataset**
2. click **samples** comparison
3. Open, fill out, and close the **edit sample groups** table
4. Then specify test and control groups to compare

{{< img-simple src="multi-groups.png" alt="Download Comparison" class="border-1" >}}

<!-- {{< alert icon="💡" text="Pairs are used to indicate paired samples - e.g. same individual pre/post treatment. Sample pairs will be used as a blocking variable for pseudobulk mixed-effect differential expression analyses with <a href='https://bioconductor.org/packages/release/bioc/html/limma.html'>limma</a>." >}} -->

{{< alert icon="💡" text="Dseqr uses limma-voom for pseudobulk and differential abundance analyses" >}}

### Download differential analyses

To download the results of differential analyses between test and control samples select a cluster for group comparison then click download:

{{< img-simple src="multi-download.png" alt="Download Comparison" class="border-1" >}}

### Pseudobulk differential expression

[Pseudobulk](http://bioconductor.org/books/3.14/OSCA.multisample/multi-sample-comparisons.html) expression profiles are used for differential expression analyses between test and control groups.

{{< alert icon="💡" text="Pseudobulk performs better than other methods in <a href='https://www.biorxiv.org/content/biorxiv/early/2019/07/26/713412.full.pdf'>benchmarks</a>." >}}

{{< alert icon="💡" text="For samples comparison, genes are sorted by pseudobulk differential expression p-values. This compares the selected cluster between test and control samples." >}}

### Differential abundance

A [differential abundance analysis](http://bioconductor.org/books/3.14/OSCA.multisample/differential-abundance.html) is included in the downloaded results for any cluster. A grid-based differential abundance plot also allows you to visualize regions of differential abundance: 

{{< img-simple src="multi-abundance.png" alt="Differential Abundance" class="border-1" >}}

{{< alert icon="💡" text="The grid-based differential abundance defines clusters by projecting a grid over the embedding but is otherwise the same as the differential abundance analysis provided with downloaded results." >}}
### Pathway analyses

Dseqr runs Gene Ontology over-representation analysis of significantly up- and down-regulated genes. This uses a cached adaptation of [goana](https://www.bioconductor.org/packages/devel/workflows/vignettes/RnaSeqGeneEdgeRQL/inst/doc/edgeRQL.html#pathway-analysis).

{{< alert icon="💡" text="Adaptations to goana:</br></br>- Uses genes with FDR < 0.05 with a min of 50 up/down.</br>- Uses expressed genes as a background (from edgeR::filterByExpr).</br>- Removes terms with fewer than 4 up/down genes (too few).</br>- Removes terms with more than 250 genes (too broad).</br>- Removes terms with Δup-down < 3 genes per 10 (not distinctly up/down).</br>- Removes terms with FDR > 0.05 (not significant).</br>- Removes terms with FDR < 0.05 for both up/down (not distinctly up/down)" >}}

{{< alert icon="💡" text="Terms are grouped if their set of up/down genes have a jaccard similarity > 0.7 (smallest FDR is parent)." >}}

{{< alert icon="💡" text="The <b>Genes</b> column in the GO csv can be pasted into the gene search box to explore up/down genes for a term." >}}

### Visual exploration

With samples comparison, select a gene to see expression side-by-side in test and control cells:

{{< img-simple src="multi-plot-cells.png" alt="Compare Groups Plot" class="border-1" >}}

You are also shown the distribution of logcounts across each sample for the selected cluster:

{{< img-simple src="multi-plot-samples.png" alt="Compare Samples Plot" class="border-1" >}}

You can also toggle the pseudobulk plot button to visualize regions of differential expression for the selected gene:

{{< img-simple src="multi-pseudobulk.png" alt="Compare Groups Pseudobulk Plot" class="border-1" >}}

{{< alert icon="💡" text="Grid-based differential expression defines clusters by projecting a grid over the embedding but is otherwise similar to the cluster-based pseudobulk differential expression analyses." >}}

### Compare all clusters

To view genes that are consistently differentially expressed across clusters select *All Clusters*:

{{< img-simple src="multi-all-clusters.png" alt="Compare All Clusters" class="border-1" >}}

{{< alert icon="💡" text="logFC for all clusters is calculated with an effect size meta-analysis on the differential expression analyses between test and control samples for each cluster.</br></br> FDRs are similarly calculated with a p-value based meta-analysis using Stouffer's method followed by adjustment for multiple hypothesis testing." >}}