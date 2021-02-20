---
title: "Differential Analyses"
description: "Run expression and pathway analyses between test and control samples."
lead: ""
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

### Download differential analyses

To run differential expression and pathway analyses, first select a test group followed by a control group. Then click the download button: 

{{< img-simple src="bulk-diff.png" alt="Download Analyses" class="border-1" >}}

{{< alert icon="💡" text="The Pairs column is used to indicate paired samples - e.g. same individual pre/post treatment. If provided, pairs are used as a blocking variable for differential expression analyses with <a href='https://bioconductor.org/packages/release/bioc/html/limma.html'>limma</a>." >}}

### Pathway analyses

Dseqr runs Gene Ontology and KEGG [pathway analyses](https://www.bioconductor.org/packages/devel/workflows/vignettes/RnaSeqGeneEdgeRQL/inst/doc/edgeRQL.html#pathway-analysis) using two methods:
1. Over-representation analysis of significantly up- and down-regulated genes. Significance is defined as FDR < 0.05. This uses [goana and kegga](https://www.bioconductor.org/packages/devel/workflows/vignettes/RnaSeqGeneEdgeRQL/inst/doc/edgeRQL.html#pathway-analysis) and is not run if there are no significant genes.
2. Competitive gene set test which uses test statistics for all genes. This uses [cameraPR](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3458527/) and is always included.

{{< alert icon="💡" text="The authors of the above functions usually ignore GO terms with p-values greater than about 10<sup>-5</sup>" >}}


### Surrogate variable analysis

Discovered surrogate variables can be optionally included as covariates for differential expression analyses:

{{< img-simple src="bulk-sva.png" alt="Choose SVs" class="border-1" >}}

### MDS plots

[Multi-dimensional scaling plots](https://www.huber.embl.de/users/klaus/stat_methods_bioinf/graphics_bioinf.html#multidimensional-scaling-mds) are shown for both non-adjusted and adjusted data:

{{< img-simple src="bulk-mds.png" alt="MDS plots" class="border-1" >}}

{{< alert icon="💡" text="Adjusted logcounts are computed by <a href='http://research.libd.org/jaffelab/reference/cleaningY.html'>regressing out</a> <i>Pairs</i> and surrogate variables." >}}

{{< alert icon="💡" text="Adjusted logcounts are used only for visualization. For differential expression analyses, <i>Pairs</i> and surrogate variables are used as covariates with non-adjusted logcounts." >}}