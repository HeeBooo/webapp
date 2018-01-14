import React from 'react';
import Item from './Item';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const List = props => {
    const data = props.data;
    return (
        <div>
            {
                data.map((item, i) => {
                    return (
                        <Item key={i} data={item} />
                    )
                })
            }
        </div>
    );
};

export default List;