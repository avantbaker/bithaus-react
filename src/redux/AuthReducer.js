const base = { authorized:  false };
const CLICK_SIGN_IN = 'CLICK_SIGN_IN';

export default (prevState = base, action) => {
    let state;
    switch(action.type) {
        case CLICK_SIGN_IN:
            state = Object.assign({}, prevState, { authorized: true });
            break;
        default:
            break;
    }
    return state || prevState;
};