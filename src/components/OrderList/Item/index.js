import React from 'react';
import { getImage } from '~static/js/common';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Item = props => {
    const data = props.data;

    return (
        <div className="order-list-item">
            <div className="item-img">
                <img src={getImage(data.img)} alt="{data.title}" />
            </div>
            <div className="item-content">
                <span>商户: {data.title}</span>
                <span>数量: {data.count}</span>
                <span>价格: ￥{data.price}</span>
            </div>
            <div className="item-comment">
                <button>评价</button>
            </div>
        </div>

    );
};

export default Item;
