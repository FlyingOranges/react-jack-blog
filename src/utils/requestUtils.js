import axios from 'axios';
import qs from 'qs';

let baseUrl = 'https://www.pengsongyang.com';

// 请求(request)拦截器
axios.interceptors.request.use((config) => {
    // 在发送请求之前something
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }

    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应(respones)拦截器
axios.interceptors.response.use((response) => {
    //对响应something

    return response;
}, (error) => {
    return Promise.reject(error);
});

//测试接口
export const requestTest = params => {
    return axios.get(`${baseUrl}/order/list`, params).then(res => res.data);
};