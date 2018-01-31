import React, { PureComponent } from 'react';
import CommentList from '~components/CommentList'; // 评论列表
import LoadMore from '~components/LoadMore'; // 加载更多
import { getCommentData } from '~fetch/detail/detail';
import './style.scss';

class Info extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0,
            id: this.props.id
        }
    };

    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户评价</h2>
                {
                    this.state.data.length
                    ? <CommentList data={this.state.data} />
                    : <div>loading...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData} />
                    : ''
                }
            </div>
        );
    };

    componentDidMount() {
        this.loadFirstPageData();
    };

    // 获取首页数据
    loadFirstPageData = () => {
        const { id, page } = this.state;
        const result = getCommentData(page, id);

        this.resultHandle(result);

    };

    // 数据处理
    resultHandle = result => {
        result.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(json => {
            const { hasMore, data } = json;

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)  // 将第n+1页的数据累加到第n页上
            })
        });
    };

    // 加载更多
    loadMoreData = () => {
        // 将状态变为加载中
        this.setState({
            isLoadingMore: true
        });

        const { page, id } = this.state;
        const result = getCommentData(page, id);

        this.resultHandle(result);

        // 增加page的计数
        setTimeout(() => {
            this.setState({
                page: page + 1,
                isLoadingMore: false
            });
        });
    };
};

export default Info;
