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
 * @param {Fetch} fetch
 * @param {string} method
 * @param {string} url
 * @param {object} params
 * @param {string=} params.queryParams
 * @param {object=} params.body
 * @param {string=} params.token
 * @param {object=} params.headers
 */
const request = async (fetch, method, url, { queryParams, body, token, headers = {} }) => {
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

/**
 * @typedef {object} SignUpParams
 * @property {string} nickname
 * @property {string} email
 * @property {string} fullname
 * @property {string} password
 * @property {string} password_confirm
 * @property {string=} bio
 * @property {string=} homepage
 * @property {string=} location
 * @property {string=} token
 */

/**
 * @param {Fetch} fetch
 * @param {SignUpParams} params
 * @param {string=} token
 */
export const signUp = (fetch, params, token) =>
  request(fetch, 'POST', '/api/v1/accounts', { token, body: params })

/**
 * @param {Fetch} fetch
 */
export const getCaptcha = (fetch) =>
  request(fetch, 'GET', '/api/pleroma/captcha')

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 * @param {string=} reblogs
 */
export const followUser = (fetch, id, token, reblogs) =>
  request(fetch, 'POST', `/api/v1/accounts/${id}/follow`, { token, body: { reblogs } })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const unfollowUser = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/accounts/${id}/unfollow`, { token })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const blockUser = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/accounts/${id}/block`, { token })

/**
* @param {Fetch} fetch
* @param {string} id
* @param {string=} token
*/
export const unblockUser = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/accounts/${id}/unblock`, { token })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const pinOwnStatus = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/statuses/${id}/pin`, { token })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const unpinOwnStatus = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/statuses/${id}/unpin`, { token })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const muteConversation = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/statuses/${id}/mute`, { token })

/**
 * @param {Fetch} fetch
 * @param {string} id
 * @param {string=} token
 */
export const unmuteConversation = (fetch, id, token) =>
  request(fetch, 'POST', `/api/v1/statuses/${id}/unmute`, { token })
