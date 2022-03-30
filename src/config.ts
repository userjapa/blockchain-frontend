const API_URL = process.env.API_URL || 'http://localhost:3000'

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
