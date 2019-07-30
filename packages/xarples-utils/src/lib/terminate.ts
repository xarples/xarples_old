interface IParams {
  code: number,
  reason: string,
  error?: Error,
  message?: string,
  stack?: string,
  promise?: Promise<any>
}

export default function terminate (code: number, reason: string): (error: Error, promise: Promise<any>) => void {
  return (error: Error, promise: Promise<any>): void => {
    let params: IParams = { code, reason }

    if (error) {
      params.error = error
      params.message = error.message
      params.stack = error.stack
    }

    if (promise) {
      params.promise = promise
    }

    if (code === 0) {
      process.exit(code)
    }

    setTimeout(_ => { process.exit(code) }, 500).unref()
  }
}