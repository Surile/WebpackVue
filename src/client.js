import axios from 'axios'

let baseURL = 'https://story.naice.me/api'
const client = axios.create({
    baseURL
})

/**
 * 英雄列表，英雄分类
 */

export const fetchHeroList = () => client.get('/hero')

/**
 * 英雄详情
 */

export const fetchhero = data => client.post('/heroDetail', data)

/**
 *  世界起源
 */

export const fecthwords = () => client.get('/word')

/**
 * 世界详情导航
 */

export const fetchWordNav = id =>
    client.get(`/wordNav`, {
        params: {
            id
        }
    })

/**
 * 世界详情
 */

export const fetchWord = data => client.post(`/wordDetail/`, data)

/**
 * 皮肤鉴赏
 */

export const fetchSkins = () => client.get('/skin')

/**
 * 语音鉴赏
 */

export const fetchvoiceNav = () => client.get('/voiceNav')

/**
 * 某位英雄语音鉴赏
 */

export const voiceDetail = id =>
    client.get(`/voiceDetail`, {
        params: {
            id
        }
    })
