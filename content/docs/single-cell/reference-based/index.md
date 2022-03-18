---
title: "Reference-Based Analysis"
description: "How to project your data onto reference datasets."
lead: "How to project your data onto reference datasets."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "single-cell"
weight: 235
toc: true
---

### Reference Mapping

Reference mapping uses a previously processed and annotated dataset as a reference. Your data is projected into the UMAP coordinates of the reference and the predicted clusters and associated labels are also derived from the reference. 

You can select a reference any time that you generate a new dataset:

- Dataset Import
- Dataset Subset
- Dataset Integration

{{< alert icon="💡" text="You can select a reference from a different species than your dataset. Homologous genes will be used during the mapping." >}}

### Available References

| <div style="width:150px">Reference</div>  | Species | Demo   |  Source Link  |
|-------------------------------------------|:-------:|:------:|:-------------:|
| PBMC                                      | 🧑      |        | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20PBMC" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Lung                                      | 🧑      |        | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Lung%20v1" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Bone Marrow                               | 🧑      |        | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Bone%20Marrow" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Motor Cortex                              | 🧑      |        | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Motor%20Cortex" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Motor Cortex                              | 🐭      |        | <a href="https://azimuth.hubmapconsortium.org/references/#Mouse%20-%20Motor%20Cortex" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Differentiated CD4 T-cells                | 🧑      | ✅     | <a href="https://www.nature.com/articles/s41467-020-15543-y" target="_blank">📜</a> |
| Tumor-Infiltrating T-cells                | 🐭      | 🔜     | <a href="https://doi.org/10.6084/m9.figshare.12478571" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| Virus-Specific CD8 T-cells                | 🐭      | 🔜     | <a href="https://doi.org/10.6084/m9.figshare.12489518" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| Virus-Specific CD4 T-cells                | 🐭      | 🔜     | <a href="https://doi.org/10.6084/m9.figshare.16592693.v1" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| 10x PBMCs Atlas                           | 🧑      |        | <a href="https://github.com/immunogenomics/symphony/tree/main/pre-built_references" target="_blank"><img src="symphony.png" alt="Symphony" class="img-logo"></a> |
| Cornell scMuscle                          | 🐭      | ✅     | <a href="https://datadryad.org/stash/dataset/doi:10.5061%2Fdryad.t4b8gtj34" target="_blank">💪</a> |

{{< alert icon="💡" text="References with a demo can be explored in the <b><i>Demo Workspace</i></b> in the app." >}}
