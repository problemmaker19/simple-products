import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

export const initialState: TodoState = {todo: [], loading: false, error: ''}

export const reducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, error: '',todo: action.payload}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload, todo: []}
        case TodoActionTypes.ADD_TODO:
            return {...state, todo: [...state.todo, {todo_id: action.payload.id, name: action.payload.name}]}
        default: return state
    }
}
