# Basketbol.EU — Quantitative Sports Analytics

A systematic basketball analytics platform: a data pipeline that turns raw
results, statistics and market prices into a calibrated win probability, and
then measures that probability against the market to find where the two
disagree.

The public face of this work is [basketbol.eu](https://basketbol.eu) — a live
site covering European basketball, with a research section that documents the
methodology and case studies in plain English.

---

## What this is

The system is not a single "clever trick" model. It is a repeatable pipeline
with one job per stage:

```
Collection → Rating → Context → Probability → Market read → Delivery
```

Each stage can be inspected and tested on its own. If the final output is
wrong, we can trace *which* stage was wrong — the difference between a system
you can improve and a black box you can only replace.

- **Collection** — results, statistics, schedules and market prices, gathered
  on a fixed schedule and normalized into one consistent record per event.
- **Rating** — every tracked team carries a rating that updates as results come
  in. This is the system's long-term memory of who is strong and who is weak.
- **Context** — short-term factors that shift a single game: recent form, venue,
  schedule, rest, and fresh news (injuries, coach changes, transfers).
- **Probability** — the independent views are combined into a single win
  probability for a specific match.
- **Market read** — that probability becomes a fair price and is compared to
  the market's price. The disagreement is the signal.
- **Delivery** — when the disagreement is meaningful, the signal qualifies and
  is delivered the same way every time: a human-readable email and a
  machine-readable JSON API.

The pipeline uses three independent views — a **rating system** that learns
from every result, **Monte Carlo simulations** that explore possible outcomes,
and **team-statistics models** that measure playing style and pace. Their
specific internal parameters and weights are deliberately not published; they
are the result of calibration and are treated as proprietary.

---

## Verified results

Measured against the closing market on thousands of European basketball
matches (the public, auditable numbers):

| Metric | Value |
|---|---|
| Coverage | **38 European leagues** |
| Matches analyzed (backtest) | **8,304** |
| Backtest accuracy (overall) | **66.4%** |
| Backtest vs market baseline | **70.2%** (baseline 61.7%) |
| Closing line value vs market (mean) | **+7.91%** |

These numbers are output data — the kind we publish — not the internal
parameters that produced them. Full methodology and case studies live in the
[research section](https://basketbol.eu/research/).

*Past results do not guarantee future results. This is analytical work, not
investment advice.*

---

## Build your own system

Beyond the published analysis, we work with people who hold a proprietary
strategy — from individual researchers to professional teams — and want to
build, calibrate and validate their own model. The offer:

- **Your weights.** You bring the hypothesis; we wire it into the pipeline so
  the parameters are yours, in an isolated environment.
- **Historical data.** Backtest against thousands of matches across recent
  European seasons.
- **Validation.** Honest, no-lookahead calibration: accuracy, calibration
  curves and closing-line value, not cherry-picked backtests.
- **Deployment.** The result ships as an API and an automated daily report.

Full details on the [services page](https://basketbol.eu/services/), or
[get in touch](https://basketbol.eu/contacts/).

---

## Repository

This repository contains the public source of the [basketbol.eu](https://basketbol.eu)
static site (built with [Eleventy](https://www.11ty.dev/)):

```
src/            site source (pages, posts, research, data)
src/assets/     styles and images
.eleventy.js    build configuration
```

The production prediction engine itself is **not** in this repository — it is a
separate, private system. This repo is the public presentation layer and the
published methodology.

### Run locally

```bash
npm install
npm start          # local dev server
npm run build      # production build into _site/
```

---

## Author

[MrLongBG](https://www.linkedin.com/in/kalin-grigorov-4531183a0/) · [basketbol.eu](https://basketbol.eu)
