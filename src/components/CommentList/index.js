import React from 'react';
import CommentItem from './Item';

import './style.scss';

const CommentList = props => {
    const data = props.data;

    return (
        <div className="comment-list">
            {
                data.map((item, index) => {
                    return (
                        <CommentItem key={index} data={item} />
                    );
                })
            }
        </div>
    )
};

export default CommentList;
