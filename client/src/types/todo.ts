
export interface TodoState {
    todo: any[],
    loading: boolean,
    error: string,
}

export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    ADD_TODO = "ADD_TODO",
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO,
    payload: {id: number, name: string}
}

export type TodoAction =
    AddTodoAction |
    FetchTodoAction |
    FetchTodoSuccessAction |
    FetchTodoErrorAction
