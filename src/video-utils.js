function clampRange(start, end, duration) {
  var safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
  var safeStart = Number.isFinite(start) ? start : 0;
  var safeEnd = Number.isFinite(end) ? end : safeDuration;

  safeStart = Math.max(0, Math.min(safeStart, safeDuration));
  safeEnd = Math.max(0, Math.min(safeEnd, safeDuration));

  if (safeDuration && safeEnd <= safeStart) {
    safeEnd = Math.min(safeDuration, safeStart + 1);
    if (safeEnd <= safeStart) safeStart = Math.max(0, safeEnd - 1);
  }

  return { start: safeStart, end: safeEnd };
}

function formatTime(seconds) {
  var safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  var total = Math.floor(safe);
  var mins = Math.floor(total / 60);
  var secs = total % 60;
  var tenths = Math.floor((safe - total) * 10);
  return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0') + '.' + tenths;
}

function exportFileName(originalName, extension) {
  var safeExtension = String(extension || 'mp4').replace(/[^a-z0-9]+/gi, '').toLowerCase() || 'mp4';
  var base = String(originalName || 'video')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9_-]+/gi, '-')
    .replace(/^-+|-+$/g, '') || 'video';
  return base + '-trimmed.' + safeExtension;
}

export { clampRange, formatTime, exportFileName };
