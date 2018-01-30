import React from 'react';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Star = props => {
    // 获取star数量，并且取余5（最多5个star）
    let star = props.star || 0;
    if (star > 5) {
        star = star % 5;
    }
    return (
        <div className="star-container">
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    // 如果是大于等于的数字就说明是红色的
                    const lightClass = star >= item ? 'light' : '';

                    return (
                        <i key={index} className={`icon-star ${lightClass}`}></i>
                    );
                })
            }
        </div>
    )
};

export default Star;
