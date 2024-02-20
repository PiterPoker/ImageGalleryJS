const paragraphs = new Map()

export const getParagraph = (paragraphIndex) => {
    return paragraphs.get(paragraphIndex)
} 

export const setParagraph = (paragraph) => {
    return paragraphs.set(paragraph.index, paragraph)
}

export default {
    getParagraph,
    setParagraph,
}