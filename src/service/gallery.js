let gallery = []

export const getImages = () => {
    return gallery
} 

export const setImages = (images) => {
    return gallery = new Array(...images)
}

let imageUrl = '' 

export const getImage = () => {
    return imageUrl
} 

export const setImage = (url) => {
    return imageUrl = url
}

export default {
    getImages,
    setImages,
    getImage,
    setImage,
}