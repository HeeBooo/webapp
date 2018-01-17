import React, { PureComponent  } from 'react';

import SearchHead from '~components/SearchHeader';

class Search extends PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHead 
                    keyword={params.keyword}
                    history={this.props.history}
                />
            </div>
        );
    };

    componentDidMount() {
        console.log(this.props)
    }

}

export default Search;
