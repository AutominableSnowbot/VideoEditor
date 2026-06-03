# ClipForge / VideoEditor

A tiny local-first video editing PWA.

## Current MVP

- Pick a local video file.
- Preview it in-browser.
- Set trim start/end times.
- Export the selected range as `.mp4` using browser-loaded `ffmpeg.wasm`.
- Falls back to `.webm` recording if MP4 export fails.
- No upload, no backend, no cloud processing.

## Important limitations

- First MP4 export downloads a large FFmpeg WebAssembly engine.
- MP4 export can be slow and memory-heavy, especially on phones or large files.
- Firefox desktop works for short clips in local testing; mobile browsers may vary.
- WebM fallback still records playback roughly in real time.

## Files

- `index.html` — app UI plus MP4/WebM export logic.
- `manifest.json` — PWA metadata.
- `sw.js` — offline shell cache.
- `src/video-utils.js` and `tests/` — small helper tests.

## Development

```bash
npm test
python3 -m http.server 8770
```

Open `http://127.0.0.1:8770/`.
