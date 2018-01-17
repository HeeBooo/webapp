import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';

import SearchInput from '~components/SearchInput';
import './style.scss';

class SearchHead extends PureComponent {
    render() {
        return (
            <div className="search-head">
                <div className="search-left" onClick={this.goBack}>
                    <i className="icon-chevron-left"></i>
                </div>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput
                        value={this.props.keyword || ''}
                        enterHandle={this.enterHandle}
                    />
                </div>
            </div>
        );
    };

    // 返回
    goBack = () => {
        window.history.back();
    };

    // 跳转界面
    enterHandle = (value) => {
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    };
}

export default SearchHead;
