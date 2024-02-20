import { getParagraph } from '../../service/paragraph'

class ParagraphComponemt extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: 'open'})
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'paragraph-block')

        wrapper.innerHTML = `
            <div class="paragraph-index"></div>
            <div class="paragraph-title"></div>
            <div class="paragraph-content"></div>
        `

        const style = document.createElement('style')

        style.textContent = `
           
           .paragraph-block{
               max-width: auto;
               border-radius: 10px;
               background-color: #ccc;
               margin: 10px;
               padding: 10px;
           }

           .paragraph-block .paragraph-index{
               padding: 10px;
               font-weight: bold; 
           }

           .paragraph-block .paragraph-title{
               padding: 10px;
               font-weight: bold; 
           }

           .paragraph-block .paragraph-content{
               padding: 10px;
               font-family: fantasy;
               max-height: 200px;
               overflow: hidden;
               cursor: pointer;
           }

        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper)
    }

    connectedCallback(){
        const shadow = this.shadowRoot
        const id = this.getAttribute('id')

        const paragraph = getParagraph(parseInt(id))

        const index = shadow.querySelector('.paragraph-index')
        index.textContent = paragraph.index
        const title = shadow.querySelector('.paragraph-title')
        title.textContent = paragraph.title
        const content = shadow.querySelector('.paragraph-content')
        content.textContent = paragraph.content

    }    
} 

customElements.define('paragraph-component', ParagraphComponemt)