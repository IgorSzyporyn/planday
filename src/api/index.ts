export type ApiQueryResult = {
  url: string
  title: string
  subtitle: string
}

export type ApiDependencyInjection = (query: string) => ApiQueryResult[]

export const api = async (depInjection: ApiDependencyInjection, query: string) => {
  // This code is trivial and needless you could say - but for scaleability I believe
  // that dependency injections makes sense for api calls
  // For one thing it lets us normalize the output and control that via the signature
  // ApiDependencyInjection since api will only accept a function with that signature
  // and output.

  const result = depInjection(query)

  return result
}
