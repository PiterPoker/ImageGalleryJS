import appConstants from '../common/constants';
import { goTo, routes } from '../router'
import { getImages, setImages } from '../service/gallery'
import { setParagraphs, getIsAccept, setIsAccept, setMainPath } from '../service/paragraphs'
import { getGalleries } from '../api/galleryAPI'

class GalleryComponemt extends HTMLElement {

    constructor() {
        super()

        setMainPath(routes.gallery.reverse())
        const shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'gallery-block')

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

    connectedCallback() {
        this.getGallery()

    }

    async getGallery() {
        const shadow = this.shadowRoot
        const wrapper = shadow.querySelector('.gallery-block')

        wrapper.innerHTML = ''

        const data = await getGalleries()
            .then()
            .catch(error => console.log(error))

        await this.acceptTermsOfUse(data['terms_of_use'])

        this.showGallery(data['images'])
    }

    async acceptTermsOfUse(termsOfUse) {

        setParagraphs(termsOfUse.paragraphs)

        if (getIsAccept() === false) {
            const url = routes.termsOfUse.reverse()
            goTo(url)
        }
    }

    showGallery(images) {
        if (getIsAccept() === true) {
            setImages(images)
            const shadow = this.shadowRoot
            const wrapper = shadow.querySelector('.gallery-block')
            const imagesElement = document.createElement('images-component')
            imagesElement.setAttribute('class', 'images-block')
            wrapper.appendChild(imagesElement);
        }
        images.forEach(element => {
            console.log(`${element}`)
        });
    }
}

customElements.define('gallery-component', GalleryComponemt)