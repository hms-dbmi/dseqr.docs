---
title: "Introduction"
description: ""
lead: "Theory and methods of connectivity mapping."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "drugs"
weight: 400
toc: true
---

### Theory

[Connectivity mapping](http://www.ncbi.nlm.nih.gov/pubmed/17008526) takes a query expression signature and searches for similar and dissimilar expression signatures in reference databases.

The reference databases are from large studies where gene expression was measured before and after treatment with small molecules, protein ligands, single-gene overexpression, or single-gene knockdown.

Small molecule and gene perturbations that most strongly oppose a query signature from a disease are predicted therapeutic candidates.

Gene perturbations that are most similar to a query signature from a disease may warrant further investigation with respect to their involvment in the disease process.

{{< alert icon="💡" text="To determine similarity and dissimilarity between your query signature and the reference perturbation signatures, Dseqr uses pearson correlation." >}}

{{< alert icon="💡" text="In benchmarks, pearson correlation performs similar to cosine similarity but is faster. It outperforms other similarity metrics such as the <a href='https://www.ncbi.nlm.nih.gov/pubmed/17008526/'>Kolmogorov-Smirnov</a> statistic and <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4278345/'>eXtreme Sum</a>." >}}



### CMAP02 reference signatures

The CMAP02 study treated five human tumor cell lines with one of 1309 mostly FDA approved small molecules. For each treatment, gene expression changes were assayed using Affymetrix HG-U133 arrays. This platform measures about 14k unique HGNC symbols.

### L1000 reference signatures

The L1000 study treated seventy human cell lines with one of around 20k small molecules or 7k genetic perturbations. To do this, they developed a custom assay that only measures 978 genes. The cell lines are 80% tumor and 20% non-tumor.




