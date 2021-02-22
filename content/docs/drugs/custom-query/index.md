---
title: "Custom Signatures"
description: "How to upload a custom perturbation query signature."
lead: "How to upload a custom query signature."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "drugs"
weight: 450
toc: true
---

### Upload a custom query

To upload a custom query signature, click the toggle custom signature button, enter a name for the query, and click the upload button:

{{< img-simple src="drugs-custom.png" alt="Custom Query" class="border-1" >}}

{{< alert icon="💡" text="Requirements for uploaded custom query csv:</br></br>1) first column is unique HGNC symbols</br>2) either: </br>- I. a column named <i>dprime</i> or <i>logFC</i> or</br>- II. the second column contains effect size values ">}}

{{< alert icon="💡" text="For custom queries, all uploaded genes that were also measured by L1000/CMAP02 are used. In contrast, query signatures from the Single-Cell or Bulk tabs use only the top 200 most differentially expressed genes.">}}


