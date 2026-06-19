# Design QA

- Source visual truth: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\score-priority-reference.png`
- Desktop implementation: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\score-priority-2048.png`
- Mobile implementation: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\score-priority-390.png`
- Full comparison: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\score-priority-comparison.png`
- Focused comparison: `C:\Users\31954\Documents\skill\kaisaiqian-site\output\design-qa\score-priority-focused-comparison.png`
- Viewports: 390, 430, 768, 1024, 1440, and 2048 px
- State: all four upcoming match detail pages

## Full-view comparison evidence

The supplied screenshot shows the score-path card below win-draw-loss, handicap, and model-consensus analysis. The implementation moves the score-path card directly after the match conclusion and before the first probability card, making the six score references visible earlier without changing the surrounding two-column layout.

## Focused region comparison evidence

The focused before/after board confirms the primary-column sequence changed from conclusion → probabilities → model → scores to conclusion → scores → win-draw-loss → handicap → model. Card styling, spacing, copy, probabilities, and risk annotations remain unchanged.

## Findings

- No actionable P0, P1, or P2 findings.
- No remaining P3 visual drift attributable to this scoped reorder.

## Required fidelity surfaces

- Fonts and typography: unchanged from the approved score-path component; no clipping or new wrapping.
- Spacing and layout rhythm: the existing 16 px desktop and 10 px mobile card gaps are preserved after reordering.
- Colors and visual tokens: unchanged black, lime, gray, and risk-red tokens.
- Image quality and asset fidelity: no new imagery or icons were required for this information-priority change.
- Copy and content: all six score paths, probabilities, annotations, probability analyses, and supporting copy remain present.

## Patches made

- Moved the score-path component above win-draw-loss analysis on all upcoming match detail pages.
- Reordered the same sections in all four upcoming match PDFs.
- Preserved every other component, route, interaction, and responsive rule.

## Verification

- All four matches passed at six widths with the exact order: conclusion → scores → win-draw-loss.
- No horizontal overflow occurred.
- Each detail page still renders six score cards.
- All four updated PDFs remain single-page and place score paths before win-draw-loss.

final result: passed
