import { setParagraphs, getIsAccept, setIsAccept } from '../service/paragraphs'
import { goTo, routes } from '../router'
import appConstants from '../common/constants'

class MainComponemt extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'main-block')

        const style = document.createElement('style')

        style.textContent = `
           
           .gallery-block{
               display: flex;
               align-items: flex-start;
               justify-content: center;
               flex-wrap: wrap;
               padding: 5px;
           }

        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper)
    }

    connectedCallback(){
    }
}

customElements.define('main-component', MainComponemt)