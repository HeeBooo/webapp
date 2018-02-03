import React from 'react';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const Header = props => {
    return (
        <div className="common-header">
            <span className="back-icon" onClick={clickHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{props.title}</h1>
        </div>
    );
};

const clickHandle = () => {
    // 返回上一页
    const backRouter = this.props.backRouter;
    
    if (backRouter === undefined) {
        this.props.toBack(backRouter);
    } else {
        window.history.back(backRouter);
    }
};

export default Header;
