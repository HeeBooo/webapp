import React, { PureComponent  } from 'react';
import Comment from '~components/Comment';
import { getCommentData } from '~fetch/detail/detail';

class Info extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            id: this.props.id,
            page: 0
        }
    };

    render() {
        return (
            <Comment data={this.state.data} />
        )
    };

    componentDidMount() {
        const { id, page } = this.state;
        const result = getCommentData(page, id);
        
        result.then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                return;
            }
        }).then(json => {
            const data = json;

            if (data.length) {
                this.setState({
                    data: data
                })
            };
        });
    };
};

export default Info;
