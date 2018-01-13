import React, { PureComponent } from 'react';

import './style.scss';

class LoadMore extends PureComponent {
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle}>加载更多</span>
                }
            </div>
        )
    };

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        const callback = () => {
            const top = wrapper.getBoundingClientRect().top; // 节点左上角到窗口左上角的高度
            const windowHeight = window.screen.height; // 屏幕的高度

            // 当wrapper已经被滚到暴露在页面的可视范围之内的时候就触发
            if (top && top < windowHeight) {
                loadMoreFn();
            };
        };

        // 连续滚动的时候只会触发一次callback， 节流
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return;
            };

            if (timeoutId) {
                clearTimeout(timeoutId);
            };

            timeoutId = setTimeout(callback, 50);
        }, false);
        // true - 事件句柄在捕获阶段执行
        // false- 默认。事件句柄在冒泡阶段执行
    };

    loadMoreHandle = () => {
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn();
    };
}



export default LoadMore;