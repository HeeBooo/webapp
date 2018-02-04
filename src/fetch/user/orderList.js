import get from '../get';
import post from '../post';


// 获取订单列表
export const getOrderListData = username => {
    const result = get(`/api/orderList/${username}`);

    return result;
};

// 提交评价
export const postComment = (id, comment) => {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment
    });

    return result;
};