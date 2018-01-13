import React from 'react';

import { getImage } from '~static/js/common';

import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Item = props => {
    const data = props.data;
    
    return (
        <div className="list-item">
            <div className="item-img-container">
                <img src={getImage(data.img)} alt="{data.title}" />
            </div>
            <div className="item-content">
                <div className="item-title-container">
                    <h3>{data.title}</h3>
                    <span>{data.distance}</span>
                </div>
                <p className="item-sub-title">{data.subTitle}</p>
                <div className="item-price-container">
                    <span className="price">￥{data.price}</span>
                    <span className="mumber">已售{data.mumber}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
