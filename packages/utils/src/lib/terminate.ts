import { getLogger } from './logger'

interface IParams {
  code: number,
  reason: string,
  error?: Error,
  message?: string,
  stack?: string,
  promise?: Promise<any>
}

const logger = getLogger('@xarples/utils')

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

    logger.error({ message: params })

    if (code === 0) {
      process.exit(code)
    }

    setTimeout(_ => { process.exit(code) }, 500).unref()
  }
}