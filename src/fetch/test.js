import 'whatwg-fetch';
import 'es6-promise';

export function getData() {
    // '/api/1'获取字符串
    let result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    });

    let result1 = fetch('api/2', {
        credentials: 　'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export function postData() {
    let result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'a=100&b=200'
    })

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}