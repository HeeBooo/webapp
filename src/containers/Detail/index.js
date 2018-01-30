import React, { PureComponent  } from 'react';
import Header from '~components/Header';
import Info from './subpage/Info';
import Comment from './subpage/Comment';

class Detail extends PureComponent {
    render() {
        // 获取商户id
        const id = this.props.match.params.id;

        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <Comment id={id} />
            </div>
        )
    };
}

export default Detail;
