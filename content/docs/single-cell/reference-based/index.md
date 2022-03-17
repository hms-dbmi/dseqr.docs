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

| <div style="width:300px">Reference</div>  |  Link |
|-------------------------------------------|-------|
| PBMC - Human                              | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20PBMC" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Lung - Human                              | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Lung%20v1" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Bone Marrow - Human                       | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Bone%20Marrow" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Motor Cortex - Human                      | <a href="https://azimuth.hubmapconsortium.org/references/#Human%20-%20Motor%20Cortex" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Motor Cortex - Mouse                      | <a href="https://azimuth.hubmapconsortium.org/references/#Mouse%20-%20Motor%20Cortex" target="_blank"><img src="Azimuth.png" alt="Azimuth" class="img-logo"></a> |
| Tumor-Infiltrating T-cells - Mouse        | <a href="https://doi.org/10.6084/m9.figshare.12478571" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| Virus-Specific CD8 T-cells - Mouse        | <a href="https://doi.org/10.6084/m9.figshare.12489518" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| Virus-Specific CD4 T-cells - Mouse        | <a href="https://doi.org/10.6084/m9.figshare.16592693.v1" target="_blank"><img src="projectils.png" alt="ProjectTIL" class="img-logo"></a> |
| 10x PBMCs Atlas - Human                   | <a href="https://github.com/immunogenomics/symphony/tree/main/pre-built_references" target="_blank"><img src="symphony.png" alt="Symphony" class="img-logo"></a> |
| Cornell scMuscle - Mouse                  | <a href="https://datadryad.org/stash/dataset/doi:10.5061%2Fdryad.t4b8gtj34" target="_blank">💪</a> |