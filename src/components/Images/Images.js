import appConstants from '../../common/constants';
import { render } from '../../router'
import { getImages, setImage } from '../../service/gallery';

class ImagesComponemt extends HTMLElement{
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        //const wrapper = document.createElement('dialog')
        wrapper.setAttribute('class', 'images-block')

        const style = document.createElement('style')

        style.textContent = `
           
           .images-block{
               display: center;
               align-items: flex-start;
               justify-content: center;
               flex-wrap: wrap;
               padding: 5px;
           }
           

           .download-button{
            justify-content: center;
           }

        `

        shadow.appendChild(style)
        shadow.appendChild(wrapper)
    }
    
    connectedCallback() {
        const shadow = this.shadowRoot
        const wrapper = shadow.querySelector('.images-block')

        wrapper.innerHTML = ''

        const images = getImages();
        
        images.forEach((image, index) => {
            setImage(image)
            const imageElement = document.createElement('image-component')
            imageElement.setAttribute('id', index)
            wrapper.appendChild(imageElement)
        });
    }
} 

customElements.define('images-component', ImagesComponemt)