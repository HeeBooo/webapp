import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFormOtherFile from '~actions/userinfo';

import LocalStore from '~util/localStore';
import { CITYNAME } from '~config/localStoreKey';

import RouteMap from '~router/routeMap';

import './index.scss';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        };
    };

    componentDidMount() {
        // 从localstorage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        };

        // 将城市信息存储到Redux中
        this.props.userinfoActions.update({
            cityName: cityName
        });

        // 更改状态
        this.setState({
            initDone: true
        });
    };

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.initDone
                        ? <RouteMap />
                        : <div>loading...</div>
                    }
                </div>
            </div>
        );
    };
};

// ==========================redux react 绑定==========================

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);