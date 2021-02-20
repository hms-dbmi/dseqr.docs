---
title: "Integrate Samples"
description: ""
lead: "How to integrate test and control samples. Prerequisite for sample comparison."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu: 
  docs:
    parent: "single-cell"
weight: 250
toc: true
---

### Specify datasets

Click the toggle twice to open integration controls: 

{{< img-simple src="integrate-select.png" alt="Select Integration" class="border-1" >}}

Then select test and control datasets to be compared and provide a new dataset name:

{{< img-simple src="integrate-pairs.png" alt="Select Datasets" class="border-1" >}}

{{< alert icon="💡" text="You can optionally select clusters from each dataset to include or exclude." >}}

{{< alert icon="💡" text="You can select either <a href='https://github.com/immunogenomics/harmony'>harmony</a> and/or <a href='http://bioconductor.org/books/release/OSCA/integrating-datasets.html#performing-mnn-correction'>fastMNN</a> integration types.</br>The integration type will be added to the end of the name. For example:</br>PBMCS_A_vs_B → PBMCS_A_vs_B<b>_harmony</b>" >}}

{{< alert icon="💡" text="You can optionally download, fill out, then upload a sample pairs csv (picture above). This is used to indicate paired samples - e.g. same individual pre/post treatment. Sample pairs will be used as a covariate for <a href='https://github.com/immunogenomics/harmony#harmony-with-two-or-more-covariates'>harmony</a> and a blocking variable for pseudobulk mixed-effect differential expression analyses with <a href='https://bioconductor.org/packages/release/bioc/html/limma.html'>limma</a>." >}}

To begin integration, click the plus button.
