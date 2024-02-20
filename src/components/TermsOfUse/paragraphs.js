import { setParagraph } from '../../service/paragraph'
import { getParagraphs, setIsAccept, getMainPath } from '../../service/paragraphs'
import { goTo } from '../../router'

class ParagraphsComponemt extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        //const wrapper = document.createElement('dialog')
        wrapper.setAttribute('class', 'paragraphs-block')

        const style = document.createElement('style')

        style.textContent = `
           
           .paragraphs-block{
               display: center;
               align-items: flex-start;
               justify-content: center;
               flex-wrap: wrap;
               padding: 5px;
           }
           

           .paragraphs-button{
            justify-content: center;
           }

           .paragraphs-buttons-block{
            display: flex;
            justify-content: center;
           }

        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper)
    }

    connectedCallback() {
        const shadow = this.shadowRoot
        const wrapper = shadow.querySelector('.paragraphs-block')

        wrapper.innerHTML = ''

        const paragraphs = getParagraphs();

        paragraphs.sort(function (a, b) {
            return a.index - b.index;
        })
        
        paragraphs.forEach(paragraph => {
            setParagraph(paragraph)
            const paragraphElement = document.createElement('paragraph-component')
            paragraphElement.setAttribute('id', paragraph.index)
            wrapper.appendChild(paragraphElement)
        });

        const blockButtons = document.createElement('div')
        blockButtons.setAttribute('class', 'paragraphs-buttons-block')

        const acceptButton = document.createElement('button')
        acceptButton.setAttribute('class', 'paragraphs-button')
        acceptButton.innerHTML = `Accept`
        acceptButton.addEventListener('click', (e) => {
            e.stopPropagation()
            setIsAccept(true)
            const url = getMainPath()
            goTo(url)
        })
        blockButtons.appendChild(acceptButton)
        shadow.appendChild(blockButtons)
    }
} 

customElements.define('paragraphs-component', ParagraphsComponemt)