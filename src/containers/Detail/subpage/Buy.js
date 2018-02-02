import React, { PureComponent  } from 'react';
import BuyAndStore from '~components/BuyAndStore';
// import { bindActionCreators } from 'redux';

// import { getInforData } from '~fetch/detail/detail';

class Buy extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            isStore: true  // 是否收藏 true已收藏
        }
    };

    render() {
        return (
            <div>
                <BuyAndStore 
                    isStore={this.state.isStore} 
                    storeHandle={this.storeHandle}
                    buyHandle={this.buyHandle}
                />
            </div>
        )
    };

    // 收藏
    storeHandle = () => {
        
    };

    // 购买
    buyHandle = () => {
        const loginFlag = this.props.loginCheck();
        if (!loginFlag) {
            return;
        };

        // 购买流程
        this.props.toUser();
    };
};

export default Buy;

