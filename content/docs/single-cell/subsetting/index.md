---
title: "Subsetting"
description: ""
lead: "How to customize QC and clustering."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu: 
  docs:
    parent: "single-cell"
weight: 240
toc: true
---

### Specify cells

Select a dataset and click the toggle to open subset controls: 

{{< img-simple src="qc-subset.png" alt="QC Subset" class="border-1" >}}

You can subset based on default QC metrics, saved QC metrics, and clusters.

### Exclude or include selection
Subsetting can be set to either exclude (default) or include cells that match the selected criteria:

{{< img-simple src="qc-subset-features.png" alt="QC Subset" class="border-1" >}}

Inclusion is usefull for selecting cells of interest to be re-clustered. This will generally increase the number of clusters as highly variable genes will be specific to the selected cells. 

### Custom genes for clustering

You can optionally specify *a priori* [genes of interest](http://bioconductor.org/books/release/OSCA/feature-selection.html#apriori-hvgs) to focus on specific biologic questions:

{{< img-simple src="qc-subset-custom.png" alt="Custom HVGs" class="border-1" >}}


{{< alert icon="💡" text="Upload custom genes as a text file with one HGNC symbol per line.</br></br><a href='https://raw.githubusercontent.com/hms-dbmi/dseqr/master/data-raw/macspectrum/psg_amdsg_hgnc.txt'>Example file</a> with genes that <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6542613/'>distinguish</a> M0, M1, and M2 macrophages." >}}

### Submit subset

To begin subsetting, add a tag to append to the founder name and click the submit button:

{{< img-simple src="qc-subset-submit.png" alt="Run Subset" class="border-1" >}}
