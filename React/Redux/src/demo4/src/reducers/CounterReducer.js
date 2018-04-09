import * as CounterConstant from '../constants/CounterConstant';

export default function Counter(state = 0, action) {
    switch (action.type) {
        case CounterConstant.MODIFICATION:
            return action.num;
        case CounterConstant.INCREASE:
            return state + 1;
        case CounterConstant.DECREASE:
            return state - 1;
        default:
            return state
    }
}