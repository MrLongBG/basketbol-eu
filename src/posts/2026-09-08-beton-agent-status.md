---
layout: post.njk
title: "BETON Agent — System Status & Calibration"
description: "Current state of the prediction engine: verified accuracy, CLV and what's next for the 2026–2027 season."
date: 2026-09-08
category: SYSTEM
tags:
  - beton-agent
---

This is the first public status update for the **BETON Agent** prediction engine.

## Verified performance (as of mid-July 2026)

| Metric | Value |
|---|---|
| Backtest accuracy (overall) | **66.4%** |
| Backtest vs Pinnacle | **70.2%** (Pinnacle: 61.7%) |
| Elite tier win rate | **75%** |
| Elite tier ROI | **+18.6%** |
| CLV vs Pinnacle (mean) | **+7.91%** |
| Top leagues | Bulgaria NBL, Romania, Norway, Spain Primera FEB, Greece |

## What the system runs

- **ELO rating system** — learns from every result.
- **Monte Carlo simulations** — explore possible outcomes for every match.
- **Team statistics** — measure playing style, pace and matchups.
- **News scout** — 24/7 monitoring of injuries, coach changes and transfers.

These independent views are combined into a single probability, then compared to the market's consensus. When the gap is meaningful, the signal qualifies.

## Next steps

More updates will be posted here as the season approaches — new modules, calibration runs and updated metrics. Read our methodology and case studies in the [Research](/research/) section.

*— [MrLongBG](https://www.linkedin.com/in/kalin-grigorov-4531183a0/)*
