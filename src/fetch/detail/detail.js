import get from '../get';

// 获商户信息
export function getInforData(id) {
    const result = get(`/api/detail/info/${id}`);

    return result;
}

// 获取评论数据
export function getCommentData(page, id) {
    const result = get(`/api/detail/comment/${page}/${id}`);

    return result;
}