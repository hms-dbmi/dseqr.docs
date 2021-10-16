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

To create a bulk dataset, click __Add Datasets__ in the secondary navigation bar to open the upload modal. Then upload human fastq.gz files.

{{< img-simple src="bulk-import.png" alt="Bulk Data Import" class="border-1" >}}


<!-- {{< alert icon="💡" text="Supported eset.qs file uploads:</br>- from local dseqr runs </br>- microarray and RNA-seq datasets processed with <a href='https://www.bioconductor.org/packages/release/bioc/html/crossmeta.html'>crossmeta</a>" >}} -->

{{< alert icon="💡" text="Supported fastq.gz file uploads:</br>- human paired or single-ended (up to 30GB each) </br></br><b>FastQ files are deleted 24 hours after upload.</b>" >}}

{{< alert icon="💡" text="Click the trash can icon beside a file to remove it." >}}

{{< alert icon="💡" text="Fastq.gz files can be uploaded a few at a time." >}}

### Specify pairs and replicates

For pair-ended samples, select rows of paired samples and click *Pairs*. Similarly indicate any replicates - i.e. the same sample split across multiple files:

{{< img-simple src="bulk-paired.png" alt="Bulk Data Paired" class="border-1" >}}


After providing a dataset name, click *Import Dataset* to start pseudoalignment in the background.

### Pseudoalignment

{{< alert icon="💡" text="kallisto v0.46.0 is used for pseudoalignment with an index built using GRCh38 release 94." >}}


