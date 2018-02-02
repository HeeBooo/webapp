import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';

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
                    toUser={this.toUser}
                    loginCheck={this.loginCheck}
                />
                <Comment id={id} />
            </div>
        )
    };

    // 跳转到用户主页
    toUser = () => {
        this.props.history.push('/user');
        // this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    };

    // 检查登录状态,不管是收藏还是购买，都需要登录后才能进行
    loginCheck = () => {
        const id = this.props.match.params.id;
        const userinfo = this.props;

        if (!userinfo.username) {
            // 不存在则跳转到登录界面，要传入目标router,以便登录完了之后可以自己跳转回来

            this.props.history.push('/Login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    };
}


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
)(Detail);
