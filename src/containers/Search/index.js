import React, { PureComponent  } from 'react';

import SearchHead from '~components/SearchHeader';
import SearchList from './subpage/List';


class Search extends PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHead 
                    keyword={params.keyword}
                    history={this.props.history}
                />
                <SearchList 
                    keyword={params.keyword}
                    category={params.category} 
                />
            </div>
        );
    };
}

export default Search;
