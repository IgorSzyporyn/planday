import { useEffect, useState } from 'react'
import { useStore } from 'laco-react'
import { QueryStore, QueryStoreType } from '../stores/query'
import { flickrQuery } from '../api/flickr'
import { ApiQueryResult, api } from '../api'

export type UseApiType = {
  loading: boolean
  result: ApiQueryResult | null
  error: boolean
}

export const useApi = () => {
  const [result, setResult] = useState<UseApiType>({
    loading: false,
    result: null,
    error: false,
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
          loading: false,
          result: null,
          error: true,
        }))
      }
    }

    if (query) {
      fetchData()
    }
  }, [query, setResult])

  return result
}
