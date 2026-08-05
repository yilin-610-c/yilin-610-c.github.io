---
layout: page
title: Efficient LLM Inference via Tensor-Friendly KV Cache Quantization
description: System-algorithm co-design for low-precision autoregressive decoding.
importance: 1
category: research
---

## Overview

This project investigates efficient Large Language Model inference under memory and computation constraints, with a focus on KV cache optimization for autoregressive decoding.

The key idea is to design quantization methods and execution paths that better match modern GPU low-precision hardware, reducing memory movement while preserving model quality.

## Research Focus

- Low-bit KV cache representation
- Tensor Core friendly attention computation
- Quantization accuracy and scale selection
- GPU-aware inference optimization

## Goal

Bridge algorithm-level compression techniques and system-level GPU execution to accelerate practical LLM serving.
