---
title: "Specify Groups"
description: "How to specify groups for bulk dataset comparison."
lead: "How to specify groups for comparison."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "bulk"
weight: 320
toc: true
---

### Fill in group CSV

To specify groups for comparison, download the groups csv and fill in the *Group name*  column and optionally the *Pairs* column:

{{< img-simple src="bulk-groups.png" alt="Specify Groups" class="border-1" >}}

{{< alert icon="💡" text="The Pairs column is used to indicate paired samples - e.g. same individual pre/post treatment. If provided, pairs are used as a blocking variable for differential expression analyses with <a href='https://bioconductor.org/packages/release/bioc/html/limma.html'>limma</a>." >}}




