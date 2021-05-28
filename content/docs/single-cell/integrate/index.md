---
title: "Integrate Samples"
description: "How to integrate test and control samples. Prerequisite for sample comparison."
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

Click the toggle twice to open integration controls and select datasets to integrate: 

{{< img-simple src="integrate.png" alt="Select Integration" class="border-1" >}}

Then select integration types and provide a new dataset name. To begin integration, click the plus button:

{{< img-simple src="integrate-submit.png" alt="Select Datasets" class="border-1" >}}


{{< alert icon="💡" text="You can select either <a href='https://github.com/immunogenomics/harmony'>harmony</a> and/or <a href='http://bioconductor.org/books/release/OSCA/integrating-datasets.html#performing-mnn-correction'>fastMNN</a> and/or Azimuth integration types.</br>The integration type will be added to the end of the name. For example:</br>PBMCS_A_vs_B → PBMCS_A_vs_B<b>_harmony</b>" >}}


