import baseAPI from './baseAPI'

export const getImages = () => {
    return baseAPI.get('/Galleries')
}

export default  {
    getImages,
}