import React from 'react';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const UserInfo = props => {
    const { cityName, username } = props.userinfo;
    
    return (
        <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                <span>{username}</span>
            </p>
            <p>
                <i className="icon-map-marker"></i>
                <span>{cityName}</span>
            </p>
        </div>
    )
};

export default UserInfo;
