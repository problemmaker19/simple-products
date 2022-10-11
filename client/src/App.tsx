import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/TodoList";
import StoreProvider from "./context";

const App: React.FC = () => {

    return (
        <StoreProvider>
            <TodoList />
        </StoreProvider>
    );
};

export default App;