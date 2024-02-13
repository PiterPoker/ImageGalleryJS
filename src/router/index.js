import appConstants from "../common/constants";
import Route from "route-parser";

import GalleryPage from "../pages/gallery.template"

export const routes = {
    Gallery: new Route(appConstants.routes.index),
}

export const render = (path) => {
    let result = '<h1>404</h1>'

    if(routes.Gallery.match(path)){
        result = GalleryPage()
    }

    document.querySelector('#app').innerHTML = result
}

export const goTo = (path) => {
    window.history.pushState({path}, path. path)
    render(path)
}

const initRouter = () => {
    window.addEventListener('popstate', e => {
        render( new URL(window.location.href).pathname)
    })
    
    document.querySelectorAll('[href^="/"]').forEach(el => {
        el.addEventListener('click', (env) => {
            env.preventDefault()
            const {pathname: path} = new URL(evn.target.href)
            goTo(path)
        })
    })

    render( new URL(window.location.href).pathname)
}

export default initRouter 