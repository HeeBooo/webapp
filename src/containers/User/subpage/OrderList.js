import React, { PureComponent } from 'react';
import { getOrderListData } from '~fetch/user/orderList';
import OrderListComponent from '~components/OrderList';
import './style.scss';

class OrderList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} />
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
    
};

export default OrderList;

