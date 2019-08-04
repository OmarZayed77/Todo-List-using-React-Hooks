import React, { memo, useContext } from 'react';
import Todo from './todo';
import styles from '../Styles/todosStyle';
import { withStyles } from '@material-ui/styles';
import { TodosContext } from '../Contexts/todosContext';
import List from '@material-ui/core/List';

const TodoList = (props) => {
    const { classes } = props;
    const todos = useContext(TodosContext);
    return (
        <>
            <List component="nav" aria-label="main mailbox folders" className={classes.container}>
                { todos.length 
                    ? todos.map(todo => <Todo key={todo.id} {...todo} />) 
                    : <h3 style={{"textAlign": "center"}}>You haven't any Todos, Add a new One</h3>
                }
            </List>
        </>
    );
}

export default memo(withStyles(styles)(TodoList));