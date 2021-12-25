// @ts-check

/**
 * @param {string=} token
 * @returns {object}
 */
const authHeaders = (token) => {
  if (token) {
    return { 'Authorization': `Bearer ${token}` }
  } else {
    return {}
  }
}

/**
 * @callback Fetch
 * @param {RequestInfo} info
 * @param {RequestInit=} init
 * @returns {Promise<Response>}
 */

/**
 * @param {object} params
 * @param {Fetch} params.fetch
 * @param {string} params.method
 * @param {string} params.url
 * @param {object=} params.queryParams
 * @param {object=} params.body
 * @param {string=} params.token
 * @param {object=} params.headers
 */
export const request = async ({ fetch, method, url, queryParams, body, token, headers = {} }) => {
  /** @type {RequestInit} */
  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...authHeaders(token),
      ...headers
    },
    credentials: 'same-origin'
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  if (queryParams) {
    url += Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }
  const response = await fetch(url, options)
  if (response.ok) {
    return response.json()
  } else {
    const error = await response.json()
    throw new Error(error)
  }
}
