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

<div class="border border-1 rounded img-simple p-1 img-fluid gif">
  <img src="upload.gif" alt="Upload"/>
</div>

### Add datasets


To add single-cell datasets:
-  click add datasets
-  drag and drop files to upload
-  provide a sample name for associated files
-  when done, click **Import Datasets**

<!-- {{< img-simple src="add_datasets1.png" alt="Click Add" class="border-1" >}} -->


<!-- {{< img-simple src="add_datasets.png" alt="Click Add" class="border-1" >}} -->


{{< alert icon="💡" text="Supported Cell Ranger file uploads:</br>- raw_feature_bc_matrix.h5 or </br>- *matrix.mtx(.gz), *barcodes.tsv(.gz), and *genes|features.tsv(.gz)" >}}
{{< alert icon="💡" text="Supported fastq.gz file uploads:</br>- 10X Genomics 3' (up to 30GB each) </br></br><b>FastQ files are deleted 24 hours after upload.</b>" >}}
{{< alert icon="💡" text="- Cell Ranger files from all <a href='https://uswest.ensembl.org/info/about/species.html'>ensembl species</a> are supported.</br>- Only human fastq.gz files are currently supported. </br></br><a href='mailto:alexvpickering@gmail.com'>submit a request →</a>" >}}
