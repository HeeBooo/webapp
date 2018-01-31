import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '~components/SearchInput';
import './style.scss';

class Homeheader extends PureComponent {
    render() {
        return (
            <div className="home-header">
                <Link className="home-header-left" to="/city">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </Link>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput
                            value=""
                            enterHandle={this.enterHandle}
                        />
                    </div>
                </div>
                <Link className="home-header-right" to="/Login">
                    <i className="icon-user"></i>
                </Link>
            </div>
        );
    };

    enterHandle = (value) => {
        // 跳转界面
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    };
};

export default Homeheader;
