import React from 'react';
import Star from '../../Star';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Item = props => {
    // 获取数据
    const item = props.data;

    return (
        <div className="comment-item">
            <h3>
                <i className="icon-user"></i>
                &nbsp;
                {item.username}
            </h3>
            <Star star={item.star} />
            <p>{item.comment}</p>
        </div>
    );
};

export default Item;