// 接口文档：http://121.89.205.189/admindoc/
// 导入axios
import axios from 'axios'

// 配置基准地址
axios.defaults.baseURL = 'http://121.89.205.189/admin';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 给请求头携带token
    config.headers['token'] = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : ''
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 每次响应数据回来后，都判断数据中的code是否是token无效的
    if(response.data.code === '10119') {
        // 表示token无效 - 跳转到登录页
        window.location.href = '/#/login'
    }
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 导出axios
export default axios