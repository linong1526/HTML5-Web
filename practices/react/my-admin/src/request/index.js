// 导入自己处理过的axios
import axios from './axios'
// 封装将对象转成字符串参数的函数
function objToStr(data) {
    let arr = []
    for(let key in data) {
        arr.push(key + '=' + data[key])
    }
    return arr.join('&')
}
// 将所有请求定义成函数封装并导出
export function loginRequest(data) {
    return axios.post('/admin/login', objToStr(data))
}
// 请求用户总数量
export function getUserNum() {
    return axios.get('statistic/user')
}
// 请求商品总数量
export function getProNum() {
    return axios.get('statistic/product')
}

// 获取banner列表
export function getBanner() {
    return axios.get('/banner/list')
}

// 添加轮播图的接口
export function addBanner(data) {
    return axios.post('/banner/add', objToStr(data))
}

// 删除轮播图的接口
export function delBanner(id) {
    return axios.get('/banner/delete?bannerid=' + id)
}

// 获取管理员列表
export function getUsers() {
    return axios.get('/admin/list')
}

// 添加用户的方法
export function addUser(data) {
    return axios.post('/admin/add', objToStr(data))
}

// 获取当前用户详细信息的请求
export function getUserInfo()  {
    return axios.get('/admin/detail?adminname=' + sessionStorage.getItem('username'))
}