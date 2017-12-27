/**
 * Created by yanyuan on 2017/9/27.
 */
import axios from 'axios';
import { message } from 'antd';
import nprogress from 'nprogress/nprogress.js';

let bol = ''
bol === 'mock' ? axios.defaults.baseURL = 'http://rap.xdbigdata.com/mockjsdata/30' : axios.defaults.baseURL = ''
axios.interceptors.request.use(function (config) {
    if (config.method === 'get') {
        config.params = {
            _ie: +(new Date())
        }
    }
    nprogress.start()
    return config
}, function (error) {
    // Do something with request error
    nprogress.done()
    return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
    if (!response.data.status) {
        message.error(response.data.message ? response.data.message : '未知错误')
    }
    nprogress.done()
    return response
}, function (error) {
    message.error(error.response.data.message ? error.response.data.message : '未知错误')
    nprogress.done()
    return Promise.reject(error)
})

export const GET = function (url) {
    const CancelToken = axios.CancelToken
    const request = axios.get(url, {
        cancelToken: new CancelToken(function executor (c) {
            window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return null
        }
    })
    return request
}

export const POST = function (url, query) {
    const CancelToken = axios.CancelToken
    const request = axios.post(url, query, {
        cancelToken: new CancelToken(function executor (c) {
            window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return null
        }
    })
    return request
}

export const DELETE = function (url) {
    const CancelToken = axios.CancelToken
    const request = axios.delete(url, {
        cancelToken: new CancelToken(function executor (c) {
            window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return null
        }
    })
    return request
}

export const PUT = function (url) {
    const CancelToken = axios.CancelToken
    const request = axios.put(url, {
        cancelToken: new CancelToken(function executor (c) {
            window.$HttpPendingList.push(c)
        })
    }).catch(function (thrown) {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled')
        } else {
            return null
        }
    })
    return request
}
