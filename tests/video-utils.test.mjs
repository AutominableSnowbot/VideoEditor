import test from 'node:test';
import assert from 'node:assert/strict';
import { clampRange, formatTime, exportFileName, exportReadyMessage } from '../src/video-utils.js';

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

test('exportFileName creates a safe mp4 name by default', () => {
  assert.equal(exportFileName('My Clip!.mov'), 'My-Clip-trimmed.mp4');
});

test('exportFileName can create fallback webm names', () => {
  assert.equal(exportFileName('My Clip!.mp4', 'webm'), 'My-Clip-trimmed.webm');
});

test('exportReadyMessage names the finished file', () => {
  assert.equal(exportReadyMessage('My-Clip-trimmed.mp4'), 'Your trimmed video is ready: My-Clip-trimmed.mp4');
  assert.equal(exportReadyMessage(''), 'Your trimmed video is ready: clip-trimmed.mp4');
});
