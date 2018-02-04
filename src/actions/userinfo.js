import * as actionTypes from '~constants/userinfo';

export const update = data => ({
    type: actionTypes.USERINFO_UPDATE,
    data
});
