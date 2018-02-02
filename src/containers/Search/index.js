import React, { PureComponent  } from 'react';

import SearchHeader from '~components/SearchHeader';
import SearchList from './subpage/List';

class Search extends PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader 
                    keyword={params.keyword}
                    toSearchPage={this.toSearchPage}
                />
                <SearchList 
                    keyword={params.keyword}
                    category={params.category} 
                />
            </div>
        );
    };

    // 界面跳转
    toSearchPage = value => {
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    };
}

export default Search;
