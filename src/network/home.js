import {
    request,
} from './request'

//对首页的请求进行统一的管理，更加方便
//增加了一个层，对首页的请求进行封装统一管理，很容易管理
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}