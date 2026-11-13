---
layout: page
title: Hardware-Aware KV-Cache Quantization for Efficient LLM Serving
description: Studying how low-bit representations and GPU execution constraints affect quantization accuracy and serving efficiency.
importance: 1
category: research
status: Ongoing research
---

**HKUST(GZ) · May 2026–Present · Ongoing research**

Supervisor: [Prof. Zeyi Wen](https://zeyiwen.github.io/)

## From fewer bits to faster inference

Low-bit KV-cache representations can reduce the memory required for LLM serving, but a smaller representation does not automatically lead to faster GPU execution. The numerical choices that preserve model accuracy also need to fit the computation and data access patterns of attention kernels. I study this connection between quantization accuracy and execution efficiency.

## Algorithms and experiments

My work focuses on understanding quantization error and activation distributions, developing low-bit quantization approaches, and evaluating calibration and scale selection. Numerical diagnostics and ablation studies help examine how these choices affect accuracy and their suitability for efficient execution.

I contribute experiments, literature analysis, research figures, and writing. I work with teammates on GPU kernels, serving-runtime integration, and system benchmarking, connecting the algorithmic questions to their implementation in a serving system.

[All research projects]({{ '/projects/' | relative_url }})
