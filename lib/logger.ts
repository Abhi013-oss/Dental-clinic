/**
 * Structured Backend Logger for Error Tracking & Diagnostics
 */
type LogLevel = 'info' | 'warn' | 'error';

export function logBackendEvent(level: LogLevel, context: string, message: string, meta?: Record<string, unknown>) {
  const timestamp = new Date().toISOString();
  const payload = {
    timestamp,
    level,
    context,
    message,
    ...(meta ? { meta } : {}),
  };

  if (level === 'error') {
    console.error(`[BACKEND_ERROR] [${timestamp}] [${context}]: ${message}`, meta || '');
  } else if (level === 'warn') {
    console.warn(`[BACKEND_WARN] [${timestamp}] [${context}]: ${message}`, meta || '');
  } else {
    console.log(`[BACKEND_INFO] [${timestamp}] [${context}]: ${message}`);
  }

  return payload;
}
