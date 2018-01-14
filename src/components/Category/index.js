import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe'; // 引入轮组组件
import { getHomeCategoryData } from '~fetch/home/home'; // 获取轮播图数据
import './style.scss';

class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            index: 0
        };
    };

    render() {
        const option = {
            auto: 2000,
            callback: function (index) {
                this.setState({
                    index: index
                })
            }.bind(this)
        };

        const data = this.state.data;

        return (
            <div className="home-category">
                <ReactSwipe className="carousel" swipeOptions={option}>
                    <div className="carousel-item">
                        <ul>
                            {
                                data.slice(0, 10).map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={item.link} className={item.className}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            {
                                data.slice(10, 20).map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={item.link} className={item.className}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            {
                                data.slice(20, 30).map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={item.link} className={item.className}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="swipe-pagination">
                    <li className={this.state.index === 0 ? 'selected' : ''}></li>
                    <li className={this.state.index === 1 ? 'selected' : ''}></li>
                    <li className={this.state.index === 2 ? 'selected' : ''}></li>
                </ul>
            </div>
        );
    };

    componentDidMount() {
        const result = getHomeCategoryData();

        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json;

            this.setState({
                data: data
            });
        });
    };
}

export default Category;
