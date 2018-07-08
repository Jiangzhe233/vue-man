import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : '管理系统';
    window.document.title = title;
};

const ajaxUrl = 
    env === 'dev' ?
    'http://127.0.0.1:8081' :
    env === 'prod' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 6000,
    headers: {'Content-Type': 'application/json'}
});

export default util;
