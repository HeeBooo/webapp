import React, { PureComponent } from 'react';
import OrderListComponent from '~components/OrderList';
import { getOrderListData, postComment } from '~fetch/user/orderList';

import './style.scss';

class OrderList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment} />
                    : <div>暂无订单</div>
                }
            </div>
        )
    };

    componentDidMount() {
        const username = this.props.username;

        if (username) {
            this.loadOrderList(username);
        }
        
    };

    // 获取列表数据
    loadOrderList = username => {
        const result = getOrderListData(username);

        result.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(json => {
            const data = json;
            this.setState({
                data: data
            });
        }).catch(error => {
            console.log(error)
        })
    };

    // 提交评价
    submitComment = (id, comment, callback) => {
        // 上传值
        const result = postComment(id, comment);

        result.then(res => {
            if(res.status === 200) {
                return res.json();
            }
        }).then(json => {
            if (json.errno === 0) {
                callback()
            }
        }).catch(error => {
            console.log(error)
        })
    };
};

export default OrderList;

