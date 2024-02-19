import baseAPI from './baseAPI'

export const getGalleries = () => {
    return baseAPI.get('/static/test.json')
}

export const getImageByUrl = (urlPath) => {
    return baseAPI.get(urlPath, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
}

export const getHost = () => {
    return baseAPI.baseUrl
}

export default {
    getHost,
    getGalleries,
    getImageByUrl,
}