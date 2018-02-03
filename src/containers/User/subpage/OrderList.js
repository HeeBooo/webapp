import React, { PureComponent } from 'react';

import { getOrderListData } from '~fetch/user/orderList';

class OrderList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    render() {
        return (
            <div>
                13
            </div>
        )
    };

    componentDidMount() {
        const username = this.props.username;

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

