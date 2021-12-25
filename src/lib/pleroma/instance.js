// @ts-check

import { request } from './util'

/**
 * @typedef {import('./types').Account} Account
 * @typedef {import('./types').Activity} Activity
 * @typedef {import('./types').Emoji} Emoji
 * @typedef {import('./types').Instance} Instance
 * @typedef {import('./types').Tag} Tag
 * @typedef {import('./util').Fetch} Fetch
 */

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @returns {Promise<Instance>}
 */
export const getInstance = ({ fetch }) =>
  request({ fetch, method: 'get', url: '/api/v1/instance' })

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @returns {Promise<string[]>}
 */
export const getPeers = ({ fetch }) =>
  request({ fetch, method: 'get', url: '/api/v1/instance/peers' })

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @returns {Promise<Activity[]>}
 */
export const getWeeklyActivity = ({ fetch }) =>
  request({ fetch, method: 'get', url: '/api/v1/instance/activity' })

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @param {number=} param.limit
 * @returns {Promise<Tag[]>}
 */
export const getTrends = ({ fetch, limit }) =>
  request({ fetch, method: 'get', url: '/api/v1/trends', queryParams: { limit } })

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @param {string=} param.offset
 * @param {string=} param.limit
 * @param {string=} param.order
 * @param {boolean=} param.local
 * @returns {Promise<Account[]>}
 */
export const getDirectory = ({ fetch, offset, limit, order, local }) =>
  request({ fetch, method: 'get', url: '/api/v1/directory', queryParams: { offset, limit, order, local } })

/**
 * @param {object} param
 * @param {Fetch} param.fetch
 * @returns {Promise<Emoji[]>}
 */
export const getCustomEmoji = ({ fetch }) =>
  request({ fetch, method: 'get', url: '/api/v1/custom_emojis' })
