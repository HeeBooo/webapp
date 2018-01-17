import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';

import ListComponent from '~components/List';
import LoadMore from '~components/LoadMore';

import { getSearchData } from '~fetch/search/search';

// 初始化state

const initialState =  {
    data: [], // 存储列表数据
    hasMore: false, // 记录当前状态下，是否还有更多数据，后端返回的，true即还有
    isLoadingMore: false, // 记录当前状态下，是否正在加载，true即正在加载
    page: 0 // 记录下一页的页码，首页是0
};

class SearchList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = initialState;
    };

    render() {
        return (
            <div>
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
        );
    };

    // 页面初次
    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData();
    };

    // 页面第二次，重新搜索 只走componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        const { keyword, category } = this.props;
        
        // 搜索条件完全相等时，忽略
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return;
        };

        // 重置 state
        this.setState(initialState);

        // 重新加载数据
        this.loadFirstPageData();
    }

    // 获取首页数据
    loadFirstPageData = () => {
        const cityName = this.props.userinfo.cityName;
        const { keyword, category } = this.props;
        const result = getSearchData(0, cityName, category, keyword);
        console.log(result)
        this.resultHandle(result);
    };

    // 数据处理
    resultHandle = result => {
        result.then(res => {
            return res.json();
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            // 存储数据
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)  // 将第n+1页的数据累加到第n页上
            });
        });
    };

    // 加载更多
    loadMoreData = () => {
        // 将状态变为加载中
        this.setState({
            isLoadingMore: true
        });

        const cityName = this.props.userinfo.cityName;
        const page = this.state.page;
        const { keyword, category } = this.props;
        const result = getSearchData(0, cityName, category, keyword);

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

// ==========================redux react 绑定==========================

const mapStateToProps = state => {
    return {
        userinfo: state.userinfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);
