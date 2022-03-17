---
title: "Reference-Based Analysis"
description: "How to project your data onto reference datasets."
lead: "How to project your data onto reference datasets."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "single-cell"
weight: 235
toc: true
---

### Reference Mapping

Reference mapping uses a previously processed and annotated dataset as a reference. Your data is projected into the UMAP coordinates of the reference and the predicted clusters and associated labels are also derived from the reference. 

You can select a reference any time that you generate a new dataset:

- Dataset Import
- Dataset Subset
- Dataset Integration

{{< alert icon="💡" text="You can select a reference from a different species than your dataset. Homologous genes will be used during the mapping." >}}

### Available References

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |