import appConstants from "../common/constants";
import Route from "route-parser";
import { getIsAccept, setMainPath } from "../service/paragraphs";

import GalleryPage from "../pages/gallery.html"
import MainPage from "../pages/main.html"
import TermsOfUse from "../pages/termsOfUse.html"

export const routes = {

    gallery: new Route(appConstants.routes.gallery),
    termsOfUse: new Route(appConstants.routes.tremsOfUse),
    main: new Route(appConstants.routes.index),
}

export const render = (path) => {
    let result = '<h1>404</h1>'

    if (routes.gallery.match(path)) {
        result = GalleryPage()
    }
    if (routes.main.match(path)) {
        result = GalleryPage()
    }
    if (routes.termsOfUse.match(path)) {
        result = TermsOfUse()
    }

    document.querySelector('#app').innerHTML = result
}

export const goTo = (path) => {
    window.history.pushState({ path }, path.path)
    render(path)
}

const initRouter = () => {
    window.addEventListener('popstate', e => {
        render(new URL(window.location.href).pathname)
    })

    document.querySelectorAll('[href^="/"]').forEach(el => {
        el.addEventListener('click', (env) => {
            env.preventDefault()
            const { pathname: path } = new URL(evn.target.href)
            goTo(path)
        })
    })

    render(new URL(window.location.href).pathname)
}

export default initRouter 