# Glassbloom Promo Video

A 60-second, 1920×1080 promo video for the Glassbloom website, plus a poster (thumbnail) image, built with [Remotion](https://www.remotion.dev).

The rendered files are committed, so you can watch them without installing anything:

- Video: [`out/glassbloom-promo.mp4`](out/glassbloom-promo.mp4)
- Poster: [`out/poster.jpg`](out/poster.jpg)

## Commands

```bash
npm install
npm run studio   # live preview & scrubbing in the browser
npm run render   # regenerate the music, then render out/glassbloom-promo.mp4
npm run poster   # render out/poster.jpg
npm run music    # regenerate public/music.wav only
```

## Structure

- `src/timing.js` sets the tempo (100 BPM) and the scene layout in bars. The video and the music generator both read it, so every cut lands on the beat.
- `src/scenes/` has eight scenes: Intro, Hero, Services, Stats, Portfolio, Tech Stack, Testimonial and Outro (the outro shows glassbloom.vercel.app and the contact email).
- `src/components/` has the shared animated background (it pulses with the kick drum), the logo, the section header and the animation helpers.
- `src/poster/` has the poster: `Poster.jsx` lays it out and `theme.js` holds its colours and fonts. Its logo and site screenshots are in `public/poster/`.
- `scripts/generate-music.mjs` synthesizes the soundtrack from scratch: warm pads, sub bass, a soft kick with sidechain pumping, a delayed pluck arpeggio, risers and impacts. The track is original, so there are no licensing issues.

To use a different track, replace `public/music.wav` (or point `<Audio>` in `src/GlassbloomPromo.jsx` at another file) and render with `npx remotion render GlassbloomPromo out/glassbloom-promo.mp4`.
