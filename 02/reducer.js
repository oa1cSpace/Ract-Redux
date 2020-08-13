let state = 0;

/** функция 'updateState' не изменяет исходное состояние,
 * она возвращает новое состояние!
 * Такая ф-ция в Redux назыывается 'reducer' (преобразователь). */
function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}
/** переделаем 'action' для передачи дополнительной информации,
 * например передадим число для последующих действий(прибавить 5, отнять 3)
 * для этого вместо простой строки педадим объект с необходимыми свойствами.
 * Также изменим и саму ф-цию 'updateState'. */
state = updateState(state, {type: 'INCREMENT', amount: 5});
console.log(state);

state = updateState(state, {type: 'DECREMENT', amount: 3});
console.log(state);

state = updateState(state, {});
console.log(state);