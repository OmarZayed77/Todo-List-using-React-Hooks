export default (todos, action) => {
    let newTodos = [...todos];
    switch (action.type) {
        case "ADD":
            newTodos.push(action.payload);
            break;
        case "DEL":
            newTodos = newTodos.filter(t => t.id !== action.id);
            break;
        case "EDIT":
            newTodos = newTodos.map(t => t.id === action.payload.id ? action.payload : t);
            break;
        case "TOGGLE":
            newTodos = newTodos.map(t => t.id === action.id ? {...t, isDone: !t.isDone} : t);
            break;
        default:
            break;
    }
    return newTodos;
}