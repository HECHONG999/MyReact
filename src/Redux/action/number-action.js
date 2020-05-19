import * as TypeActions from  "./action-type"

export function getIncreaseAction() {
    return {
        type: TypeActions.INCREASE
    }
}

export function getDecreaseAction() {
    return {
        type: TypeActions.DECREASE
    }
}

export function getSetAction() {
    return {
        type: TypeActions.SET,
        payload: function () {
            return "何冲很帅"
        }
    }
}