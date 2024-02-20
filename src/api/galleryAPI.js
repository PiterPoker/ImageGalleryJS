import baseAPI from './baseAPI'

export const getGalleries = () => {
    return baseAPI.get('/static/test.json')
        .then(response => response.json())
}

export const getImageByUrl = async (urlPath) => {

    return await baseAPI.get(urlPath)
        .then(async (response) => await response.blob())
}

export const getHost = () => {
    return baseAPI.baseUrl
}

export default {
    getHost,
    getGalleries,
    getImageByUrl,
}