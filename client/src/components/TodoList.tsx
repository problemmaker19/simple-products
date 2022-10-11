import React, {useEffect} from 'react';
import {useActions, useState} from "../context";

const TodoList: React.FC = () => {

    const { todos: { todo, error, loading } } = useState()
    const { todos }  = useActions()

    useEffect(() => {
        todos.fetchAllTodos()
    }, [])

    if(error) return <h3>{error}</h3>
    if(loading) return <h3>Loading...</h3>


    return (
        <div>
            {todo.map((todo: any, i: number) => (<div key={i}>{todo.name}</div>))}
        </div>
    );
};

export default TodoList;