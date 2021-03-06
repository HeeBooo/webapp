import React, { PureComponent  } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '~actions/userinfo';

import Header from '~components/Header';
import LoginComponent from '~components/LoginComponent'

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checking: true
        }
    };

    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>等待中...</div>
                    : <LoginComponent loginHandle={this.loginHandle} />
                    // : ''
                }
            </div>
        )
    };

    componentDidMount() {
        this.doCheck();
    };

    doCheck = () => {
        // 获取redux中的userinfo
        const userinfo = this.props.userinfo;

        if (userinfo.username) {
            // 已经登录
            this.goUserPage();
        } else {
            // 尚未登录
            this.setState({
                checking: false
            })
        }
    };

    // 跳转界面到用户中心页user
    goUserPage = () => {
        this.props.history.push('/user');
    };

    // 登录成功之后的业务处理
    loginHandle = username => {
        // 保存用户名
        const actions = this.props.userInfoActions;
        // 获取redux中的userinfo
        let userinfo = this.props.userinfo;

        userinfo.username = username;
        actions.update(userinfo);

        // 跳转链接
        let url = this.props.location.pathname;
        // 截取路由地址/Login/xxx/xxxx,去掉/Login
        url = url.slice(6);
        if (url) {
            // 如果url存在，就跳回登录前的界面，router就是登录前的界面
            this.props.history.push(url);
        } else {
            // 不存在的话就到用户中心页
            this.goUserPage();
        }
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
