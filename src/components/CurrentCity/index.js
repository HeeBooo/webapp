import React from 'react';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const CurrentCity = props => {
    return (
        <div className="current-city">
            <h2>{props.cityName}</h2>
        </div>
    );
};

export default CurrentCity;
