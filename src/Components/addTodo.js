import React, {memo, useContext} from 'react';
import useInputState from '../Hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import styles from '../Styles/addTodoStyles';
import {withStyles} from '@material-ui/styles';
import {dispatchContext} from '../Contexts/todosContext';
const uuid = require('uuid/v4');


const Todo = (props) => {
    const {classes} = props;
    const [todo, handleChange, reset] = useInputState();
    const dispatch = useContext(dispatchContext);
    const press = (e) => {
        if(e.keyCode === 13) send();
    }
    const send = () => {
        if(todo.trim() !== "") {
            dispatch({type:"ADD", payload: {id: uuid(), title: todo.trim(), isDone: false}});
            reset();
        }
    }
    return(
        <div className={classes.container}>
            <div className={classes.newTodo}>
                <TextField
                id="standard-name"
                label="New Todo"
                value={todo}
                onChange={handleChange}
                margin="normal"
                fullWidth
                onKeyUp={press}
                />
            </div>
            <div className={classes.sendIcon}><i className="material-icons" onClick={send}>send</i></div>
        </div>
    );
} 

export default memo(withStyles(styles)(Todo));