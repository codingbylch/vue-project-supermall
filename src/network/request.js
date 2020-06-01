import axios from 'axios';

export function request(config) {  //目前的最终方案：直接返回instance(config)，是一个Promise
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.1 axios 请求拦截
    instance.interceptors.request.use(config => { //拦截请求
        // console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        // 3.某些网络请求（如登陆token），必须携带一些特殊的信息，这里就可以进行判断
        return config; //这里拦截之后，需要返回，否则拿不到结果
    }, err => {
        console.log(err);
    })

    // 2.2 axios响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data // 拦截之后，要返回出去，res或者res.data都行
    }, err => {
        console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}