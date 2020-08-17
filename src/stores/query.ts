import { Store } from 'laco'

export type QueryStoreType = {
  query: string
}

export const QueryStore = new Store({ query: '' })
