import React, { PureComponent } from 'react';
import BuyAndStore from '~components/BuyAndStore';

class Buy extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isStore: false  // 是否收藏 true已收藏
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

    // 进入界面后就应该判断是否收藏了
    componentDidMount() {
        this.checkStoreState();
    };

    // 检验当前商户是否已经被收藏
    checkStoreState = () => {
        const { id, store } = this.props;

        // some主要有一个满足即可
        const isStore = store.some(item => {
            // 如果store中有这个id，说明已经被收藏了
            return item.id === id;
        });

        this.setState({
            isStore
        });
    };

    // 收藏
    storeHandle = () => {
        // 验证登录
        const loginFlag = this.props.loginCheck();
        if (!loginFlag) {
            return;
        };

        const { id, storeActions } = this.props;

        if (this.state.isStore) {
            // 当前商户已经被收藏。点击时应取消收藏
            storeActions.rm({ id: id });
        } else {
            // 收藏
            storeActions.add({ id: id });
        }

        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })

    };

    // 购买
    buyHandle = () => {
        // 验证登录
        const loginFlag = this.props.loginCheck();
        if (!loginFlag) {
            return;
        };
        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        this.props.toUser();
    };
};

export default Buy;

