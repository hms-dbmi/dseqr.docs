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



### Create dataset


To create a single-cell dataset type a new dataset name and click *"Add name"*. Either select previously uploaded data or upload new data: 

{{< img-simple src="sc-create.gif" alt="Rectangle" class="border-1" >}}


{{< alert icon="💡" text="Supported Cell Ranger file uploads:</br>- raw_feature_bc_matrix.h5 or </br>- matrix.mtx, barcodes.tsv, and genes.tsv" >}}
{{< alert icon="💡" text="Supported fastq.gz file uploads:</br>- 10X Genomics 3' (up to 30GB each) </br></br><b>FastQ files are deleted 24 hours after upload.</b>" >}}
{{< alert icon="💡" text="- Cell Ranger files from either human or mouse are supported.</br>- Only human fastq.gz files are currently supported. </br></br><a href='mailto:alexvpickering@gmail.com'>submit a request →</a>" >}}
