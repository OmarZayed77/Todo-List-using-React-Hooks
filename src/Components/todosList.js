import React, {memo} from 'react';
import Todo from './todo';
import styles from '../Styles/todosStyle';
import {withStyles} from '@material-ui/styles';

const TodoList = (props) => {
    const {classes} = props;
    return(
        <>
        <h1 className={classes.header}>TODO List</h1>
        <div className={classes.container}>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </div>
        </>
    );
} 

export default memo(withStyles(styles)(TodoList));