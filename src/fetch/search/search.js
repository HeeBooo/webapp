import get from '../get';

// 搜索结果
export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : '';
    const result = get('/api/search/' + page + '/' + encodeURIComponent(cityName) + '/' + category + keywordStr);
    
    return result;
};