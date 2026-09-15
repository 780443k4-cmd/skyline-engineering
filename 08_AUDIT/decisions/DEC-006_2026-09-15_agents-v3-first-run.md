# DEC-006 — First operational test of SKYLINE_LOCAL v3.0 (5-agent architecture)

**Date:** 2026-09-15
**Gate:** AGT-05 release-gate
**Verdict: REVISE**

## What was tested
First end-to-end live run of all 5 v3.0 agents (AGT-01 seo-visibility, AGT-02 content-proof,
AGT-03 social-ops, AGT-04 knowledge-intel, AGT-05 release-gate) since activation today.

## Passed
- robots.txt / sitemap.xml healthy, 56 URLs / 4 languages (AGT-01)
- JSON-LD structured data present on /uk with correct schema types (AGT-01)
- Live social channels verified via logged-in browser: Instagram, Facebook, TikTok all
  real and unchanged from 13.09 baseline (AGT-03)

## Failed / Open
1. **CRITICAL — silent data-loss regression (highest priority).** 7 knowledge/strategy files
   (content_calendar.md, content_pillars.md, content_strategy.md, tone_of_voice.md,
   positioning.md, marketing_strategy.md, customer_journey.md) were all overwritten at the
   identical timestamp 2026-09-14 14:51 with blank ~2.1-2.2KB templates, wiping populated
   content (AGT-02, AGT-04). target_audiences.md is missing entirely. integrations.md (same
   mtime) now falsely reports Instagram/Facebook/TikTok as PENDING_CONNECTION and omits
   Google Business Profile — contradicted by AGT-03's live check. This corrupted file is the
   source of truth other agents rely on; must be restored from backup/git history before any
   agent trusts local knowledge files again.
2. **SEO — hreflang x-default still points to /en, not /uk.** Confirmed still open from
   13.09 priority list, not fixed (AGT-01).
3. **Business-identity concern.** JSON-LD "email" field uses a personal Gmail address
   instead of a business address — needs Denis's decision (AGT-01).

## Priority order of fixes
1. Restore the 7 overwritten 05_CONTENT/02_MARKETING files + target_audiences.md from
   backup/git history; audit how the 14:51 batch overwrite happened to prevent recurrence.
2. Fix integrations.md to reflect verified live channel status.
3. Fix hreflang x-default (/en → /uk).
4. Denis to decide on JSON-LD contact email.

## Rationale for REVISE (not REJECT/APPROVE)
Core mechanics work end-to-end (agents run, checks execute, live verification succeeds), so
not a REJECT. But a silent knowledge-base corruption event went undetected until this test
and other agents were already consuming the corrupted files as ground truth — cannot APPROVE
until restored and the write path that caused it is understood.

Logged by AGT-05 release-gate.
