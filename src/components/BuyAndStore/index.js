import React, { PureComponent } from 'react';

import './style.scss';

class BuyAndStore extends PureComponent {
    render() {
        return (
            <div className="store-buy-container">
                <div onClick={this.storeClickHandle}>
                    {
                        this.props.isStore
                        ? <span className="selected">已收藏</span>
                        : <span>收藏</span>
                    }
                </div>
                <div onClick={this.buyClickHandle}>
                    <span>购买</span>
                </div>
            </div>
        );
    };

    storeClickHandle = () => {
        this.props.storeHandle();
    };

    buyClickHandle = () => {
        this.props.buyHandle();
    };
};

export default BuyAndStore;