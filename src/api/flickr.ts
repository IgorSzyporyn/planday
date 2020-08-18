import { HTMLAttributes } from 'react'
import { ApiQueryData, ApiQueryResult } from '.'
import { xml2json } from '../utils/xml-to-json'

const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

// https://www.flickr.com/services/feeds/docs/photos_public/
const flikrApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne'

type FlickrElementType = {
  attributes: HTMLAttributes<HTMLAnchorElement> & { href: string }
  elements: FlickrElementType[]
  name: string
  text: string
  type: string
}

export function convertFlickrResultToApiResult(source: Record<string, any>) {
  if (!source.elements || !source.elements[0]) {
    return null
  }

  const root = source.elements[0].elements
  const result: ApiQueryResult = {
    data: [],
  }

  root.forEach(({ name, elements, attributes }: FlickrElementType) => {
    if (name === 'title') {
      result.title = elements[0].text
    }

    // As luck will have it (since there are 2 of these, the last has the best link)
    if (name === 'link') {
      result.link = attributes
    }

    if (name === 'entry') {
      const item: ApiQueryData = {}

      // @INFO - Here we want the first link
      if (elements && elements.length > 0) {
        let hasLinkAttached = false

        elements.forEach(
          ({ name: itemName, elements: itemElements, attributes: itemAttributes }) => {
            const itemValue = (itemElements && itemElements[0] && itemElements[0].text) || ''

            switch (itemName) {
              case 'id':
                item.id = itemValue
                break
              case 'title':
                item.title = itemValue
                break
              case 'published':
                item.published = itemValue
                break
              case 'author':
                itemElements.forEach(({ name: authorName, elements: authorElements }) => {
                  const authorValue =
                    (authorElements && authorElements[0] && authorElements[0].text) || ''

                  if (authorName === 'name') {
                    item.author = authorValue
                  }

                  if (authorName === 'uri') {
                    item.authorUri = authorValue
                  }

                  if (authorName === 'flickr:buddyicon') {
                    item.authorAvatar = authorValue
                  }
                })
                break
              case 'link':
                if (!hasLinkAttached) {
                  item.link = itemAttributes
                }
                break
              default:
                break
            }
          }
        )
      }

      result.data.push(item)
    }
  })

  return result
}

export type FlickrQueryTagmodeTypes = 'ANY' | 'ALL'

export const flickrQuery = async (_query: string = '') => {
  let result = null

  // @TODO - Could make tagmode options if time
  const tagmode: FlickrQueryTagmodeTypes = 'ANY'

  // The query likes its query formatter comma delimited
  let querySplit = _query.split(' ')
  let query = querySplit.join(',')
  // Lets clean up just in case they already had commas in there
  query = query.replace(/^( *, *)+|(, *(?=,|$))+/g, '').replace(/ /g, '')

  let url = `${CORS_PROXY_URL}${flikrApiUrl}?tagmode=${tagmode}&format=xml`
  url = query ? `${url}&tags=${query}` : url

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response && response.statusText === 'OK') {
    const xmlString = await response.text()
    const json = xml2json(xmlString)

    if (json) {
      result = convertFlickrResultToApiResult(json)
    }
  }

  return result
}
