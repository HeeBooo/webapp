# Home页笔记

## 1.顶部
    一个无状态组件，只是接受了props传来了的城市名称cityName。
    组件：<HomeHeader />
## 2.轮播
    导入了一个轮播组件：
    import ReactSwipe from 'react-swipe';
    组件：<CateGory />
## 3.超值特惠
    导入超值特惠json数据
    import { getAdData } from '~fetch/home/home';
    智能组件Ad在componentDidMount中接受并存储到state中，再传给子组件HomeAd展示。
    一个智能组件嵌套无状态组件，接受props传来的link和img
    组件：
        1. <Ad /> 
        2. <HomeAd /> 
## 4.猜你喜欢
    导入猜你喜欢json数据
    import { getListData } from '~fetch/home/home';
    也是一个智能组件中嵌套无状态组件，List组件接受和存储猜你喜欢的数据，再传递给ListComponent组件展示。
    组件：
        1. <List />
        2. <ListComponent />
## 5.加载更多
    改组件在猜你喜欢组件下方，通过接受传递来过来的props（isLoadingMore（true：加载中，false：加载更多），loadMoreData(加载更多方法)）
    组件：<LoadMore />

## 整个Home界面布局
    <div>
        <Homeheader cityName={this.props.userinfo.cityName} />
        <Category />
        <Ad />
        <List cityName={this.props.userinfo.cityName} />
    </div>
