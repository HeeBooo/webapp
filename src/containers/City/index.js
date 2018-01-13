import React, { PureComponent  } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFormOtherFile from '~actions/userinfo';

import Header from '~components/Header';
import CurrentCity from '~components/CurrentCity';

class City extends PureComponent {
    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
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
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
