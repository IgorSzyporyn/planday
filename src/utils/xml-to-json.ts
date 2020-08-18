import { xml2json as _xml2json } from 'xml-js'

export type Xml2JsonResponse = Record<string, any> | null

export function xml2json(xmlString: string = '') {
  let jsonString = ''
  let json: Xml2JsonResponse = null

  if (xmlString === '') {
    return null
  }

  if (xmlString) {
    try {
      jsonString = _xml2json(xmlString)

      if (jsonString) {
        try {
          json = JSON.parse(jsonString)
        } catch (e) {}
      }
    } catch (e) {}
  }

  return json
}
