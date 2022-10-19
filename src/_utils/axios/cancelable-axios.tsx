import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { buildCancellablePromise, CancellablePromise, Cancellation } from 'real-cancellable-promise'
import { HttpStatus } from '../../_enums/http-status'
import { AnyType } from '../../_types/anytype'

const showError = (error: AxiosError, status: HttpStatus) => {
  if (axios.isCancel(error)) {
    return
  }

  switch (status) {
    case HttpStatus.UNAUTHORIZED:
      console.error('not authorized ...')
      break
    case HttpStatus.NOT_FOUND:
      console.error('not found ...')
      break
    case HttpStatus.PRECONDITION_FAILED:
      console.error('precondition failed ...')
      break
    case HttpStatus.UNPROCESSABLE_ENTITY:
      console.error('Unprocessable entity ...')
      break
    case HttpStatus.BAD_REQUEST:
      console.error('Missing endpoint ...')
      break
    default:
      console.error('Non-matching error ...', status)
  }
}

export const cancellableAxios = async (config: AxiosRequestConfig) => {
  const source = axios.CancelToken.source()

  const promise = axios(config)
    .then((response: AxiosResponse<AnyType, AnyType>) => response.data)
    .catch((error: AxiosError) => {
      const status = error?.response?.status as HttpStatus

      if (error instanceof axios.Cancel) {
        showError(new Cancellation() as AxiosError, status)
      }

      showError(error, status)
    })

  return new CancellablePromise(promise, () => source.cancel())
}
