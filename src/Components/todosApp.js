import React, {memo} from 'react';
import TodoList from './todosList';
import styles from '../Styles/TodosAppStyles';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import {TodosProvider} from '../Contexts/todosContext';
import AddTodo from './addTodo';

const TodoApp = (props) => {
    const {classes} = props;
    return(
        <Paper className={classes.root}>
            <h1 className={classes.header}>TODO List</h1>
            <TodosProvider>
                <AddTodo/>
                <TodoList/>
            </TodosProvider>
        </Paper>
    );
} 

export default memo(withStyles(styles)(TodoApp));