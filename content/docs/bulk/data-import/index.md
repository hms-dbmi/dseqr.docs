---
title: "Import Dataset"
description: "How to upload your bulk data."
lead: "How to upload your bulk data."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "bulk"
weight: 310
toc: true
---

### Upload data

To create a bulk dataset, type a new dataset name and click *"Add name"*:

{{< img-simple src="bulk-import.png" alt="Bulk Data Import" class="border-1" >}}

Either select previously uploaded data or upload new data. 

{{< alert icon="💡" text="Supported eset.rds file uploads:</br>- from local dseqr runs </br>- microarray and RNA-seq datasets processed with <a href='https://www.bioconductor.org/packages/release/bioc/html/crossmeta.html'>crossmeta</a>" >}}

{{< alert icon="💡" text="Supported fastq.gz file uploads:</br>- paired or single-ended (up to 30GB each) </br></br><b>FastQ files are deleted 24 hours after upload.</b>" >}}

### Specify pairs and replicates

For pair-ended samples, select rows of paired samples and click *Paired*:

{{< img-simple src="bulk-paired.png" alt="Bulk Data Paired" class="border-1" >}}

Similarly indicate any replicates - i.e. the same sample split across multiple files. 

Finally, click *Run Quantification* to start pseudoquantification in the background.

### Pseudoalignment

{{< alert icon="💡" text="kallisto v0.46.0 is used for pseudo-quantification with an index built using GRCh38 release 94." >}}


