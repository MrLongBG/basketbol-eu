---
title: "The Architecture: One Pipeline, Three Independent Views"
description: "How the system is structured — from raw market and results data to a decision, run the same way every day."
date: 2026-09-27
---

Every morning the same machine runs. It is not a single model and it is not a single clever trick. It is a pipeline with a clear shape: data in, a probability out, a comparison against the market, and a decision. This note describes that shape — the architecture — without which the rest would not matter.

## Why the architecture is the product

Most people imagine a prediction system as a box: numbers go in, a bet comes out. That mental model is wrong, and it is the first thing we correct with anyone who asks how we work.

The actual system is closer to an assembly line. Each stage has one job, and each stage can be tested on its own. If the final output is wrong, we can trace which stage was wrong. That is the difference between a system you can improve and a black box you can only replace.

## The pipeline, end to end

**Collection.** Results, statistics, schedules and market prices are gathered on a fixed schedule. The data is messy when it arrives — inconsistent names, missing fields, different formats. It is normalized into a single consistent record per event before anything else touches it.

**Rating.** Every team in every league we track carries a rating that updates as results come in. This is the long-term memory of the system: who is strong, who is weak, and how that changes over time.

**Context.** A rating is not enough. On top of it, the system layers the short-term context that shifts a single game — recent form, the venue, the schedule, rest, and any fresh information that changes the picture.

**Probability.** The views are combined into one probability for the outcome of a specific match. This is not a formula for a score; it is an estimate of how likely each side is to win.

**The market read.** The same probability is converted into a fair price and compared to the market's price. The difference — where our read disagrees with the consensus — is the signal.

**Delivery.** When the disagreement is meaningful, the signal qualifies. It is delivered the same way every time: a human-readable email and a machine-readable JSON API, so the output feeds any downstream workflow.

## Why it is run the same way every day

Consistency is a feature, not a habit. A process that runs identically every day produces results that can be compared day over day. That comparability is what lets us measure whether the system is actually working — or whether it has started to drift and needs attention.

The edge, if there is one, is not a secret trick hidden in one stage. It is the discipline of running all of the stages together, the same way, and measuring them honestly.
