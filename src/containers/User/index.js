import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';

import Header from '~components/Header';
import UserInfo from '~components/UserInfo';
import OrderList from './subpage/OrderList';

class User extends PureComponent {
    render() {
        const userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" toHome={this.toHome} />
                <UserInfo userinfo={userinfo} />
                <OrderList username={userinfo.username} />
            </div>
        )
    };

    componentDidMount() {
        // 如果未登录，跳转到登录界面
        if (!this.props.userinfo.username) {
            this.props.history.push('/Login');
        }
    };

    // 前往home页面
    toHome = () => {
        this.props.history.push('/');
    };
};

// ==========================redux react 绑定==========================
const mapStateToProps = state => {
    return {
        userinfo: state.userinfo
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
