// let state = 0; // не используем state поскольку задали get state()

/** функция 'updateState' не изменяет исходное состояние,
 *  она возвращает новое состояние!
 *  Такая ф-ция в Redux назыывается 'reducer' (преобразователь). */
function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

/** на данный момент состояние приложения находится в открытом доступе,
 * пора его спрятать. Это можно сделать несколькими способами,
 * мы воспользуемся классом.
 * */
class Store {
    constructor(updateState, state) {
        /** названия личныхв св-в в JS начинают с нижнего подчеркивания,
         * но это не значит, что свойство будет недоступно.
         * Это дает понять пользователю, что данное св-во лучше не трогать.*/
        this._updateState = updateState;
        this._state = state;
    }

    /** для доступа к состоянию*/
    get state() {
        return this._state;
    }

    /** пользователи не должны сами вызывать метод updateState
     * для них определим метод (update), с помощью которого он будет взаимодействовать с состоянием*/
    update(action) {
        this._state = this._updateState(this._state, action);
    }
}

const store = new Store(updateState, 0);

/** вынесем объект 'action' в константу */
const actionIncrement = {type: 'INCREMENT', amount: 5};
const actionDecrement = {type: 'DECREMENT', amount: 3};



store.update(actionIncrement);
console.log(store.state);

store.update(actionDecrement);
console.log(store.state);

store.update({});
console.log(store.state);