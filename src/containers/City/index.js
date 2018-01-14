import React, { PureComponent  } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFormOtherFile from '~actions/userinfo';

import LocalStore from '~util/localStore';
import { CITYNAME } from '~config/localStoreKey';

import Header from '~components/Header';
import CurrentCity from '~components/CurrentCity';
import CityList from '~components/CityList';

class City extends PureComponent {
    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this.changeCity} />
            </div>
        )
    };

    changeCity = newCity => {
        // 将新选择的城市设置为当前城市
        if (newCity == null) {
            return;
        };

        // 1.修改redux
        const userinfo = this.props.userinfo;

        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        // 2.修改localStorage
        LocalStore.setItem(CITYNAME, newCity);

        // 3.跳转到首页
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
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
