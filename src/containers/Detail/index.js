import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as storeActionsFromFile from '~actions/store'; // 引入store收藏的action(3个)

import Header from '~components/Header';
import Info from './subpage/Info';  // 商户详情
import Buy from './subpage/Buy';  // 购买收藏
import Comment from './subpage/Comment'; // 商户评价

class Detail extends PureComponent {
    render() {
        // 获取商户id
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <Buy 
                    id={id}
                    toUser={this.toUser}
                    loginCheck={this.loginCheck}
                    userinfo={this.props.userinfo}
                    store={this.props.store}
                    storeActions={this.props.storeActions}
                />
                <Comment id={id} />
            </div>
        )
    };

    // 跳转到用户主页
    toUser = () => {
        this.props.history.push('/user');
    };

    // 检查登录状态,不管是收藏还是购买，都需要登录后才能进行
    loginCheck = () => {
        const userinfo = this.props.userinfo;

        if (!userinfo.username) {
            // 不存在则跳转到登录界面，要传入目标router,以便登录完了之后可以自己跳转回来
            const url = this.props.match.url;

            this.props.history.push(`/Login${url}`);
            return false;
        }
        return true;
    };
};

// ==========================redux react 绑定==========================
const mapStateToProps = state => {
    return {
        userinfo: state.userinfo,
        store: state.store
    };
};

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
