import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';

import Homeheader from '~components/Homeheader';
import Category from '~components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Homeheader cityName={this.props.userinfo.cityName} history={this.props.history} />
                <Category />
                <Ad />
                <List cityName={this.props.userinfo.cityName} />
            </div>
        )
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
)(Home);
