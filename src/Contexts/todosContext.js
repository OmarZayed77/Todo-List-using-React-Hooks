import React,  {createContext} from 'react';
import useLocalStorageReducer from '../Hooks/useLocalStorageReducer';
import todosReducer from '../Reducers/todosReducer';
const uuid = require('uuid/v4');

const initialtodos = [
    {id: uuid(), title: "A Sample Todo!", isDone: false}
];

export const TodosContext = createContext();
export const dispatchContext = createContext();

export const TodosProvider = (props) => {
    const [todos, dispatch] = useLocalStorageReducer(todosReducer, initialtodos, "todos"); 
    return (
        <TodosContext.Provider value={todos}>
            <dispatchContext.Provider value={dispatch}>
                {props.children}
            </dispatchContext.Provider>
        </TodosContext.Provider>
    );
}