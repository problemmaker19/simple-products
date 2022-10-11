import React from "react";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

const _apiUrl = "http://localhost:5000/";

export const fetchAllTodos = async (params = {}, dispatch: React.Dispatch<TodoAction>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODO,});
        const response = await axios.get(_apiUrl + "todos");
        dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data});
    } catch (e) {
        dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'Error occurred'})
    }
}

export const addTodo = (name: string, id: number) => {
    return {type: TodoActionTypes.ADD_TODO, payload: {id, name}}
}