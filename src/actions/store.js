import * as actionTypes from '~constants/store';

export const update = data => ({
    type: actionTypes.STORE_UPDATE,
    data
});

export const add = item => ({
    type: actionTypes.STORE_ADD,
    data: item
});

export const rm = item => ({
    type: actionTypes.STORE_RM,
    data: item
});