import test from 'node:test';
import assert from 'node:assert/strict';
import { clampRange, formatTime, exportFileName } from '../src/video-utils.js';

test('clampRange keeps trim values inside the video duration', () => {
  assert.deepEqual(clampRange(-5, 120, 60), { start: 0, end: 60 });
});

test('clampRange keeps at least a one second export window when possible', () => {
  assert.deepEqual(clampRange(10, 5, 60), { start: 10, end: 11 });
});

test('formatTime shows mm:ss.t', () => {
  assert.equal(formatTime(65.42), '01:05.4');
  assert.equal(formatTime(0), '00:00.0');
});

test('exportFileName creates a safe webm name', () => {
  assert.equal(exportFileName('My Clip!.mp4'), 'My-Clip-trimmed.webm');
});
