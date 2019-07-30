interface IParams {
  code: number,
  reason: string,
  error?: Error,
  message?: string,
  stack?: string,
  promise?: Promise<Error>
}

export function terminate (code: number, reason: string) {
  return (error: Error, p: Promise<Error>) => {
    let params: IParams = { code, reason }

    if (error) {
      params.error = error
      params.message = error.message
      params.stack = error.stack
    }

    if (p) {
      params.promise = p
    }

    if (code === 0) {
      process.exit(code)
    }

    setTimeout(_ => { process.exit(code) }, 500).unref()
  }
}