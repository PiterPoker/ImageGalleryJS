const apiServer = ''

const baseFetch = (url, config = {}, params) => {
    return new Promise((resolve, reject) => {
        try {
            const _config = {
                ...config
            }
            if (params) {
                _config['body'] = JSON.stringify(params)
            }
            window.fetch(`${apiServer}${url}`, {
                ..._config
            }).then(response => response)
                .then(resolve, reject)
        } catch (error) {
            reject(error)
        }
    })
}

const fetchGet = async (url, config) => {
    return await baseFetch(url, {
        ...config,
        method: 'GET'
    })
}

const fetchOptions = (url, config) => {
    return baseFetch(url, {
        ...config,
        method: 'OPTIONS'
    })
}

const fetchPost = (url, params = {}, config = {}) => {
    return baseFetch(url, {
        ...config,
        method: 'POST'
    }, params)
}

const fetchPut = (url, params = {}, config = {}) => {
    return baseFetch(url, {
        ...config,
        method: 'PUT'
    }, params)
}
const fetchPatch = (url, params = {}, config = {}) => {
    return baseFetch(url, {
        ...config,
        method: 'PATCH'
    }, params)
}

const fetchDelete = (url, params = {}, config = {}) => {
    return baseFetch(url, {
        ...config,
        method: 'DELETE'
    }, params)
}

export default {
    baseUrl: apiServer,
    get: fetchGet,
    options: fetchOptions,
    post: fetchPost,
    put: fetchPut,
    patch: fetchPatch,
    delete: fetchDelete,
}