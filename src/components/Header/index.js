import React, { PureComponent  } from 'react';

import './style.scss';

class Header extends PureComponent {
    render() {
        return (
            <div className="common-header">
                <span className="back-icon" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    };

    clickHandle = () => {
        // 返回上一页
        window.history.back();
    }
};

export default Header;
