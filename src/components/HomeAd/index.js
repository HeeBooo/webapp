import React from 'react';
import { getImage } from '~static/js/common';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
const HomeAd = props => {
    const data = props.data;

    return (
        <div className="home-ad">
            <h2>超值特惠</h2>
            <div className="ad-container">
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className="ad-item">
                                <a href={item.link}>
                                    <img src={getImage(item.img)} alt="" />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomeAd;


