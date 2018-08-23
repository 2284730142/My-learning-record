import * as CounterConstant from '../constants/CounterConstant';

export function modification(num) {
    return {
        type: CounterConstant.MODIFICATION,
        num
    };
}

export function increase(num) {
    return {
        type: CounterConstant.INCREASE,
        num
    };
}

export function decrease(num) {
    return {
        type: CounterConstant.DECREASE,
        num
    };
}