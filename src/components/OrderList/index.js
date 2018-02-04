import React from 'react';
import Item from './Item';

// 无状态组件可以直接使用函数形式创建
const OrderListComponent = props => {
    const data = props.data;
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <Item key={index} data={item} submitComment={props.submitComment} />
                    );
                })
            }
        </div>
    )
};

export default OrderListComponent;
