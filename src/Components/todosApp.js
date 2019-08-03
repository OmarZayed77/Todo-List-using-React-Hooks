import React, {memo} from 'react';
import TodoList from './todosList';
import styles from '../Styles/TodosAppStyles';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const TodoApp = (props) => {
    const {classes} = props;
    return(
        <Paper className={classes.root}>
            <TodoList/>
        </Paper>
    );
} 

export default memo(withStyles(styles)(TodoApp));