import * as actionTypes from '../constants/store';

const initialState = [];

export default function store(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            // 下面这种写法是错误的，因为state应该是只读的，不能直接修改state
            // state.unshift(action.data);  // 放在最前面
            return [action.data, ...state];
        case actionTypes.STORE_RM:
            const newState = state.filter(item => {
                return item.id !== action.data.id;
            });
            return newState;
        default:
            return state;
    }
};