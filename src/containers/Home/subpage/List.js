import React, { PureComponent  } from 'react';

import ListComponent from '~components/List';
import LoadMore from '~components/LoadMore';

import { getListData } from '~fetch/home/home';

import './style.scss';

class List extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [], // 存储列表数据
            hasMore: false, // 记录当前状态下，是否还有更多数据，后端返回的，true即还有
            isLoadingMore: false, // 记录当前状态下，是否正在加载，true即正在加载
            page: 1 // 记录下一页的页码，首页是0
        };
    };

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data} />
                    : <div>loading...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData} />
                    : ''
                }
            </div>
        )
    };

    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData();
    };

    // 获取首页数据
    loadFirstPageData = () => {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);

        this.resultHandle(result);
    };

    // 数据处理
    resultHandle = result => {
        result.then(res => {
            return res.json();
        }).then(json => {
            const { hasMore, data } = json;

            // 存储数据
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

        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);

        this.resultHandle(result);
        
        // 增加page的计数
        setTimeout(() =>{
            this.setState({
                page: page + 1,
                isLoadingMore: false
            });
        });
    };
}

export default List;
