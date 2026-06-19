# Design QA

- Before-state reference: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-detail-before-reference.png`
- Target visual truth: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-target-1440.png`
- Desktop implementation: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-implementation-1440.png`
- Mobile implementation: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-implementation-390.png`
- Full comparison: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-comparison.png`
- Focused comparison: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-focused-comparison.png`
- PDF evidence: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\history-report-pdf.png`
- Viewports: 390, 430, 768, 1024, and 1440 px
- State: all 24 historical match detail pages

## Full-view comparison evidence

The historical implementation now uses the same report hierarchy and 65/35 desktop grid as the upcoming target: match hero, direction summary, conclusion, six score paths, win-draw-loss trend, handicap trend, model evidence, goal range, secondary status card, and explanatory card. Historical differences are limited to actual score in the hero, validation labels replacing risk triggers, and review notes replacing the forward-looking explanation.

## Focused region comparison evidence

The focused comparison confirms equivalent card widths, order, spacing, typography hierarchy, score-path density, trend bars, and right-column alignment. The former direction/score/handicap verification flows are absent.

## Findings

- No actionable P0, P1, or P2 findings.
- P3 accepted: historical score cards identify the two original locked paths and mark the remaining four as structured extensions. This preserves provenance while maintaining the requested six-card layout.

## Required fidelity surfaces

- Fonts and typography: existing site font stack, weights, line height, and score hierarchy are unchanged.
- Spacing and layout rhythm: desktop 65/35 grid and mobile single-column rhythm match the upcoming detail page.
- Colors and visual tokens: black, lime, neutral gray, and validation-state tokens remain consistent.
- Image quality and asset fidelity: existing FlagCDN team flags and icon library are reused; no placeholder imagery or improvised icons were introduced.
- Copy and content: historical actual scores and locked predictions are retained; individual hit/miss language appears only inside the validation-label card.

## Patches made

- Rebuilt all 24 historical details with the full upcoming-report component set.
- Replaced risk triggers with validation labels.
- Replaced forward-looking analysis with review notes.
- Removed direction, score, and handicap correctness badges from the hero, history list, and search results.
- Added six-path score presentation with explicit original-versus-extended provenance.
- Rebuilt all 24 historical PDFs using the same report structure.

## Verification

- 120 browser checks passed across 24 records and five viewport widths.
- Every page contains six score cards, two trend cards, model evidence, goal range, validation labels, and review notes.
- No individual result-status term leaked outside the validation-label component.
- No horizontal overflow occurred.
- All 28 PDFs remain single-page; all 24 historical PDFs contain the complete report sections.

final result: passed
