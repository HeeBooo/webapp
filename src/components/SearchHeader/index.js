import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';

import SearchInput from '~components/SearchInput';
import './style.scss';

class SearchHead extends PureComponent {
    render() {
        return (
            <div className="search-head">
                <div className="search-left">
                    <i className="icon-angle-right"></i>
                </div>
                <div className="serach-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput
                            value=""
                            enterHandle={this.enterHandle}
                        />
                    </div>
                </div>
            </div>
        );
    };

    enterHandle = (value) => {
        // 跳转界面
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    };
}

export default SearchHead;
