import {useReducer, useEffect} from 'react';

export default (reducer, initialState, key) => {
    initialState = localStorage.getItem(key) 
                    ? JSON.parse(localStorage.getItem(key))
                    : initialState;
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line
    }, [state]);
    return [state, dispatch];
}