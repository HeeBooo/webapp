import get from '../get';

export function getOrderListData(username) {
    const result = get(`/api/orderList/${username}`);

    return result;
};