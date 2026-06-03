# ClipForge / VideoEditor

A tiny local-first video editing PWA.

## Current MVP

- Pick a local video file.
- Preview it in-browser.
- Set trim start/end times.
- Export the selected range as `.webm` using browser `MediaRecorder`.
- No upload, no backend, no cloud processing.

## Important limitations

- Export is `.webm`, not `.mp4` yet.
- Export speed is roughly real-time because the browser records playback.
- Large/high-resolution files may be slow or hit phone memory limits.
- Best first target is Android Chrome.

## Files

- `index.html` — app UI and browser recording logic.
- `manifest.json` — PWA metadata.
- `sw.js` — offline shell cache.
- `src/video-utils.js` and `tests/` — small helper tests.

## Development

```bash
npm test
python3 -m http.server 8770
```

Open `http://127.0.0.1:8770/`.
