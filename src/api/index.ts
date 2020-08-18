import { HTMLAttributes } from 'react'

export type ApiQueryData = {
  author?: string
  authorAvatar?: string
  authorUri?: string
  id?: string
  link?: HTMLAttributes<HTMLAnchorElement> & { href: string }
  published?: string
  title?: string
}

export type ApiQueryResult = {
  data: ApiQueryData[]
  link?: HTMLAttributes<HTMLAnchorElement> & { href: string }
  title?: string
} | null

export type ApiQueryPromise = Promise<ApiQueryResult>

export type ApiDependencyInjection = (query?: string) => ApiQueryPromise

export const api = async (depInjection: ApiDependencyInjection, query: string) => {
  // This code is trivial and needless you could say - but for scaleability I believe
  // that dependency injections makes sense for api calls
  // For one thing it lets us normalize the output and control that via the signature
  // ApiDependencyInjection since api will only accept a function with that signature
  // and output.

  // For instance it can be nice to leave the responsibility of bailing early and managing
  // response and just focus on fetching and normalizing data to return (or return null)
  let result = null

  const promise = await depInjection(query)

  if (promise) {
    result = promise
  }

  return result
}
