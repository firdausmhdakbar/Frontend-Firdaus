import store from '../configs/store'

const axios = require('axios');
const commonAxios = axios.create({
    baseURL: 'https://simple-contact-crud.herokuapp.com/',
    timeout: 3000
});

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

commonAxios.interceptors.response.use(function (response) {
    const { data } = response; 
    // console.log('utilData', data);

    if (data === null) {
        const error = new Error(data.message || 'Uknown error.');
        throw error;
    }
    return sleep(100, data.data);
}, function (error) {
    return Promise.reject(error);
});


export { commonAxios };