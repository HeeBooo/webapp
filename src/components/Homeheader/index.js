import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Homeheader = props => {
    return (
        <div className="home-header">
            <Link className="home-header-left" to="/city">
                <span>{props.cityName}</span>
                <i className="icon-angle-down"></i>
            </Link>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字" />
                </div>
            </div>
            <div className="home-header-right">
                <i className="icon-user"></i>
            </div>
        </div>
    )
}

export default Homeheader;
