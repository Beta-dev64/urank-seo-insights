# Observation ledger — userank.com home page import

## Recovered media
- 4 videos re-downloaded from source CDN and hosted as project assets: hero_portrait.mp4, testimony_one/two/three.webm. All confirmed loading and playing.

## Checks (route /, desktop 1280x800, phone 390x844)
- Full-page scroll: PASS both sizes (was locked by leftover `preloading` class; removed).
- Phone hero video: PASS — full-bleed, no crop (was clipped by leftover intro clip-path/scale).
- Desktop product steps (Circles/Tribe/Savings/Investing): PASS — sticky section, steps switch on scroll with matching colors and 01-04 indicator (rebuilt; original used JS scroll scenes).
- Phone feature panels: PASS — shown stacked in normal flow (original pins them via JS).
- Header menu: PASS both sizes — opens, shows links/illustrations, closes via X, backdrop, Escape; aria-expanded toggles.
- FAQ accordion: PASS — opens/closes, only one open at a time.
- Testimonial carousel: PASS — arrows center the active card; play button starts video with sound (currentTime advanced 0→1.97s in test); pause, -10s, fullscreen wired.
- Intro/testimonials/investors sections: PASS — visible in settled state (were frozen at opacity 0 / off-screen transforms).
- Page errors: none. Build: OK.

## Known differences from the original
- Scroll-driven entrance animations (word reveals, pinned wipes) render in their finished state instead of animating.
- Original desktop could not be observed live in the test browser (its loader never completed); desktop comparison used the captured markup/CSS instead of side-by-side screenshots.
- Testimonial drag/swipe not implemented; arrow buttons cover navigation.
