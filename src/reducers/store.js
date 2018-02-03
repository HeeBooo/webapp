import * as actionTypes from '../constants/store';

const initialState = [];

export default function store(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            state.unshift(action.data);  // 放在最前面
            return state;
        case actionTypes.STORE_RM:
            const newState = state.filter(item => {
                return item.id !== action.data.id;
            });
            return newState;
        default:
            return state;
    }
};