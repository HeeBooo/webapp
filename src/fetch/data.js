import get from './get';
import post from './post';

export function getData() {
    const result = get('/api');

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    });

    const result1 = get('/api/1');

    result1.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    });

    const result2 = get('/api/2');

    result2.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    });
}

export function postData() {
    const result = post('/api/post', {
        a: 100,
        b: 200
    });
    console.log(result)
    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}