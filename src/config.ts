const API_URL = window.location.origin

interface IResponse {
  type: string
  message?: string
  data?: IWallet | Object | Array<any>
}

interface IWallet {
  address: string
  balance: number
}

const RESPONSE_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

export {
  API_URL,
  RESPONSE_TYPES
}
