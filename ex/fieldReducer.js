const INITAL_STATE = {value: 'ops'};

export default function (state = INITAL_STATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return {value: action.payload}
        default:
            return state;
    }
}