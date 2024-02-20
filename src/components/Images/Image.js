import appConstants from '../../common/constants';
import { render } from '../../router'
import { getImage } from '../../service/gallery';
import { getImageByUrl, getHost } from '../../api/galleryAPI';

class ImageComponemt extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'image-block')

        wrapper.innerHTML = `
            <canvas class="images-canvas"> </canvas>
            <div class="button-block"></div>
        `

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


        const canvasElement = shadow.querySelector('.images-canvas')
        var canvasContext = canvasElement.getContext('2d');
        const imageUrl = getImage()
        console.log(imageUrl.image_url)
        var img = new Image()
        img.crossOrigin = "anonymous";
        img.onload = () => {
            canvasElement.width = img.naturalWidth
            canvasElement.height = img.naturalHeight
            canvasContext.drawImage(img, 0, 0, img.width, img.height); 
        }
        img.src = `${getHost()}${imageUrl.image_url}`;

        const buttonBlock = shadow.querySelector('.button-block')
        const buttonDownload = document.createElement('button')
        buttonDownload.setAttribute('class', 'download-button')
        buttonDownload.innerHTML = `download`
        buttonDownload.addEventListener('click', (e) => {
            e.stopPropagation()
            console.log(canvasElement)
            //console.log(canvasElement.toDataURL('image/png'))
            
            this.download(canvasElement.toDataURL(), 'image')
        })
        
        buttonBlock.appendChild(buttonDownload)

    }

    download = async (url, filename) => {
        //const blob = await getImageByUrl(url)
        //const objectUrl = URL.createObjectURL(blob)
    
        const link = document.createElement('a')
    
        link.setAttribute('href', url)
        link.setAttribute('download', filename)
        link.style.display = 'none'
    
        document.body.appendChild(link)
      
        link.click()
      
        document.body.removeChild(link)
    }
}

customElements.define('image-component', ImageComponemt)