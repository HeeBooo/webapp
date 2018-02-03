import React from 'react';
import Item from './Item';

// 无状态组件可以直接使用函数形式创建
const OrderListComponent = props => {
    const data = props.data;
    return (
        <div className="">
            {
                data.map((item, index) => {
                    console.log(item)
                    return (
                        <Item key={index} data={item} />
                    );
                })
            }
        </div>
    )
};

export default OrderListComponent;
