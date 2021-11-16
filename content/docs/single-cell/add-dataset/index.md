---
title: "Adding Datasets"
description: "How to add single-cell datasets."
lead: "How to add single-cell datasets."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "single-cell"
weight: 200
toc: true
---

<!-- {{< alert icon="🚧" text="Currently only supports Cell Ranger uploads. <a href = \"mailto:alexvpickering@gmail.com\">Submit Request →</a>" >}} -->

<!-- 
GIFs look best at full width (637px)
height can vary as desired
 -->
<div class="border border-1 rounded img-simple p-1 img-fluid gif">
  <img src="upload.gif" alt="Upload"/>
</div>

To add single-cell datasets:
-  click Dataset Management > Import
-  drag and drop files to upload
-  provide a sample name for associated files
-  when done, click **Import Datasets**

{{< alert icon="💡" text="All <a href='https://uswest.ensembl.org/info/about/species.html'>ensembl species</a> are supported.">}}

### Cell Ranger

{{< alert icon="💡" text="Supported Cell Ranger file uploads:</br>- raw_feature_bc_matrix.h5 or </br>- *matrix.mtx(.gz), *barcodes.tsv(.gz), and *genes|features.tsv(.gz)" >}}

### R Objects

{{< alert icon="💡" text="Supported R file uploads:</br>- *.qs or *.rds </br>- <i>SingleCellExperiment</i> or <i>Seurat</i> objects" >}}

Seurat object specifics:
- <code>scdata$seurat_clusters</code>: 
  - used as clusters
- <code>levels(scdata$seurat_clusters)</code>: 
  - used as cluster annotation
- <code>scdata$sample</code> or <code>scdata$orig.ident</code>: 
  - used as sample identity
  - treated as integrated if > 1 values
- <code>umap</code> or <code>tSNE</code> reduction: 
  - used for scatterplots
- <code>harmony</code> or <code>PCA</code> reduction:
  - used as corrected reduction for multiple samples
- <code>var.features</code> slot:
  - used as highly variable genes