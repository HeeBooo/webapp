import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';  // 生成的store
import App from './containers';  // 容器组件

// import { getData, postData } from './fetch/data.js';
// import './index.scss';
// getData();
// postData();

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
