import React from 'react';
import Star from '../Star';
import { getImage } from '~static/js/common';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
// dangerouslySetInnerHTML防止XSS攻击
const DetailInfo = props => {
    const data = props.data;
    
    return (
        <div className="detail-info-container">
            <div className="info-container">
                <div className="info-img-container">
                    <img src={getImage(data.img)} alt="" />
                </div>
                <div className="info-content">
                    <h1>{data.title}</h1>
                    <div className="star-container">
                        <Star star={data.star} />
                        <span className="price">￥{data.price}</span>
                    </div>
                    <p className="sub-title">{data.subTitle}</p>  
                </div>
            </div>
            <p className="info-desc" dangerouslySetInnerHTML={{__html:data.desc}}></p>  
        </div>
    )
};

export default DetailInfo;
