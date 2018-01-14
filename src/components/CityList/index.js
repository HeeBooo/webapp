import React, { PureComponent } from 'react';
import { getHotCityListData } from '~fetch/home/home';  // 获取热门城市数据
import './style.scss';

class CityList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    render() {
        const cityList = this.state.data;

        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                {
                    this.state.data.length
                        ?
                        <ul className="city-list">
                            {
                                cityList.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <span onClick={() => { this.handleClick(item.cityName) }}>{item.cityName}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        : <div>loading...</div>
                }
            </div>
        );
    };

    componentDidMount() {
        const result = getHotCityListData();

        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json;

            // 存储热门城市信息
            this.setState({
                data: data
            });
        });
    };

    handleClick = newCity => {
        this.props.changeFn(newCity);
    };

};

export default CityList;
