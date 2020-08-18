import { useStore } from 'laco-react'
import { useEffect, useState } from 'react'
import { api, ApiQueryResult } from '../api'
import { flickrQuery } from '../api/flickr'
import { QueryStore, QueryStoreType } from '../stores/query'

export type UseApiType = {
  error: boolean
  loading: boolean
  result: ApiQueryResult | null
}

export const useApi = () => {
  const [result, setResult] = useState<UseApiType>({
    error: false,
    loading: false,
    result: null,
  })
  const { query }: QueryStoreType = useStore(QueryStore)

  useEffect(() => {
    const fetchData = async () => {
      setResult((state) => ({ ...state, loading: true, result: null }))

      const _result = await api(flickrQuery, query)

      if (_result) {
        setResult((state) => ({ ...state, loading: false, result: _result }))
      } else {
        setResult((state) => ({
          ...state,
          error: true,
          loading: false,
          result: null,
        }))
      }
    }

    if (query) {
      fetchData()
    }
  }, [query, setResult])

  return result
}
