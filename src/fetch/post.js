import 'whatwg-fetch';
import 'es6-promise';

// 将对象拼接成 key1=val1&key2=val2&key3=val3的字符串形式
// {
//     key1: 'val1',
//     key2: 'val2',
//     key3: 'val3',
// }  转为 'key1=val1&key2=val2&key3=val3'
function obj2params(obj) {
    let result = '';
    let item;
    console.log(obj)
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

export default function post(url, paramsObj) {
    const result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'appllication/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)  // body只接受字符串形式
    });
    
    return result;
}