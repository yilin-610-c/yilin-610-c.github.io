---
layout: page
title: "AgenticMath: Multi-Agent Mathematical Data Synthesis"
description: Engineering and evaluating a multi-agent pipeline for compact mathematical reasoning datasets.
importance: 4
category: research
status: Completed · DATA-FM Workshop at ICLR 2026
---

**HKUST(GZ) · May 2025–May 2026 · Completed**

Supervisor: [Prof. Jiaheng Wei](https://sites.google.com/ucsc.edu/jiahengwei)

Can a relatively small, carefully constructed synthetic dataset improve mathematical reasoning in LLMs? AgenticMath explores this question through a pipeline in which agents collaborate to produce training examples.

## Building and evaluating the pipeline

The pipeline has four stages: seed selection, question reformulation, answer refinement, and quality evaluation. I reviewed related work on mathematical reasoning data synthesis and helped engineer the multi-agent data-generation pipeline across these stages.

To evaluate the resulting data, I fine-tuned 3B–8B LLMs and conducted in-domain and out-of-domain evaluations. These experiments examine both performance on the target distribution and how well the learned reasoning transfers beyond it.

## What the study found

In the collaborative study, models trained on **30–60K synthesized examples** achieved competitive reasoning performance against baselines trained on much larger datasets, on the evaluated benchmarks.

**AgenticMath: Enhancing LLM Reasoning via Agentic-based Math Data Generation** was accepted at the **DATA-FM Workshop at ICLR 2026**.

[Workshop paper](https://openreview.net/forum?id=wrOXg95VoF) · [arXiv preprint](https://arxiv.org/abs/2510.19361) · [All research projects]({{ '/projects/' | relative_url }})
