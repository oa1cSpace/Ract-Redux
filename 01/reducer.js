let state = 0;

/** функция 'updateState' не изменяет исходное состояние,
 * она возвращает новое состояние!
 * Такая ф-ция в Redux назыывается 'reducer' (преобразователь). */
function updateState(state, action) {
    if (action === 'INCREMENT') {
        return state + 1;
    } else if (action === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'nothing');
console.log(state);