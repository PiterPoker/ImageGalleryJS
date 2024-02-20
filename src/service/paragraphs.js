let termsOfUse = new Map();

export const getParagraphs = () => {
    return termsOfUse.get('paragraphs')
} 

export const setParagraphs = (paragraphs) => {
    return termsOfUse.set('paragraphs', paragraphs)
}

let isAcceptTermsOfUse = false;

export const getIsAccept = () => {
    return isAcceptTermsOfUse
} 

export const setIsAccept = (isAccept) => {
    return isAcceptTermsOfUse = isAccept
}

let mainPath = '';

export const getMainPath = () => {
    return mainPath
} 

export const setMainPath = (path) => {
    return mainPath = path
}

export default {
    getParagraphs,
    setParagraphs,
    getIsAccept,
    setIsAccept,
    getMainPath,
    setMainPath,
}