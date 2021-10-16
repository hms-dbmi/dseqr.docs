---
title: "Differential Analyses"
description: "Run expression and pathway analyses between test and control samples."
lead: "Run expression and pathway analyses between test and control samples."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "bulk"
weight: 330
toc: true
---

### Download analyses

To run differential expression and pathway analyses, first select a test group followed by a control group. Then click the download button: 

{{< img-simple src="bulk-diff.png" alt="Download Analyses" class="border-1" >}}


### Pathway analyses

Dseqr runs Gene Ontology over-representation analysis of significantly up- and down-regulated genes. This uses a cached adaptation of [goana](https://www.bioconductor.org/packages/devel/workflows/vignettes/RnaSeqGeneEdgeRQL/inst/doc/edgeRQL.html#pathway-analysis).

{{< alert icon="💡" text="Adaptations to goana:</br></br>- Uses genes with FDR < 0.05 with a min of 50 up/down.</br>- Uses expressed genes as a background (from edgeR::filterByExpr).</br>- Removes terms with fewer than 4 up/down genes (too few).</br>- Removes terms with more than 250 genes (too broad).</br>- Removes terms with Δup-down < 3 genes per 10 (not distinctly up/down).</br>- Removes terms with FDR > 0.05 (not significant).</br>- Removes terms with FDR < 0.05 for both up/down (not distinctly up/down)" >}}

{{< alert icon="💡" text="Terms are grouped if their set of up/down genes have a jaccard similarity > 0.7 (smallest FDR is parent)." >}}

### Surrogate variable analysis

Discovered [surrogate variables](https://bioconductor.org/packages/release/bioc/html/sva.html) can be optionally included as covariates for differential expression analyses:

{{< img-simple src="bulk-sva.png" alt="Choose SVs" class="border-1" >}}

### MDS plots

[Multi-dimensional scaling plots](https://www.huber.embl.de/users/klaus/stat_methods_bioinf/graphics_bioinf.html#multidimensional-scaling-mds) are shown for both non-adjusted and adjusted data:

{{< img-simple src="bulk-mds.png" alt="MDS plots" class="border-1" >}}

{{< alert icon="💡" text="Adjusted logcounts are computed by <a href='http://research.libd.org/jaffelab/reference/cleaningY.html'>regressing out</a> <i>Pairs</i> and surrogate variables." >}}

{{< alert icon="💡" text="Adjusted logcounts are used only for MDS visualization. For differential expression analyses, <i>Pairs</i> and surrogate variables are used as covariates with non-adjusted logcounts." >}}


### Gene plots

Viewing raw logcounts for a gene can be a useful addition to summary statistics. To show logcounts for a gene of interest summarized by groups, select a gene to show expression for:

{{< img-simple src="bulk-gene-plot.png" alt="Gene plots" class="border-1" >}}

{{< alert icon="💡" text="Gene plots use non-adjusted logcounts." >}}