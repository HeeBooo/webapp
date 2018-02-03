import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';

import Header from '~components/Header';

class User extends PureComponent {
    render() {
        return (
            <div>
                <Header title="用户主页" backRouter="/home" />
                <Header userinfo={this.props.userinfo} />
            </div>
        )
    };

    componentDidMount() {
        // 如果未登录，跳转到登录界面
        if (!this.props.userinfo.username) {
            this.props.history.push('/Login');
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

    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
