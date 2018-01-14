import get from '../get';

// 轮播数据
export function getHomeCategoryData() {
    const result = get('/api/homeCategory');

    return result;
};

// 超值特惠
export function getAdData() {
    const result = get('/api/homead');

    return result;
};

// 猜你喜欢
export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);

    return result;
};

// 热门城市列表
export function getHotCityListData() {
    const result = get('/api/hotCityList');

    return result;
};


