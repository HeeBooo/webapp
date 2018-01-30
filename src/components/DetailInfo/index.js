import React from 'react';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const DetailInfo = props => {
    const data = props.data;
    console.log(data)
    return (
        <div>
            {data.title}
        </div>
    )
};

export default DetailInfo;
