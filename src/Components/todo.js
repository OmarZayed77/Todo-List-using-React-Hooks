import React, {memo, useContext} from 'react';
import {dispatchContext} from '../Contexts/todosContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from '../Styles/todoStyles';
import { withStyles } from '@material-ui/styles';


const Todo = (props) => {
    const dispatch = useContext(dispatchContext);
    const {id, title, isDone, classes} = props;
    const toggle = () => {
        dispatch({type:"TOGGLE", id});
    }

    const onDelete = (e) => {
        e.stopPropagation();
        dispatch({type: "DEL", id})
    }

    return(
    <ListItem button onClick={toggle}>
        <ListItemIcon>
        { isDone ? <i className="material-icons">done</i> : <i className="material-icons">history</i> }
        </ListItemIcon>
        <ListItemText primary={title} className={isDone ? classes.isDone: ""}/>
        <i className="material-icons" onClick={onDelete}>delete</i>
    </ListItem>
    );
} 

export default memo(withStyles(styles)(Todo));