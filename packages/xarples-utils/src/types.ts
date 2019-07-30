export interface ILogger {
  error: (payload: string | Object) => void,
  warn: (payload: string | Object) => void,
  info: (payload: string | Object) => void,
  debug: (payload: string | Object) => void
}