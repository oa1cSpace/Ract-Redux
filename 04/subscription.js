function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

/** с помощью паттерна "наблюдатель" реализуем отслеживание изменения состояния*/
class Store {
    constructor(updateState, state) {
        this._updateState = updateState;
        this._state = state;

        this._callbacks = [];
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    /** механизм подписки на событие*/
    subscribe(callback) {
        this._callbacks.push(callback);
        /** метод отписки, ф-ция удаляющая из массива ф-цию обратного вызова*/
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }
}

const store = new Store(updateState, 0);


const actionIncrement = {type: 'INCREMENT', amount: 5};
const actionDecrement = {type: 'DECREMENT', amount: 3};

const unsubscribe = store.subscribe(() => console.log('New changes1: ' + store.state));
store.subscribe(() => console.log('New changes2: ' + store.state));

store.update(actionIncrement);
unsubscribe();
store.update(actionDecrement);
store.update({});