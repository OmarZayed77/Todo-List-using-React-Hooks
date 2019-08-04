import {useState} from 'react';

export default (initialValue = "") => {
    const [state, setState] = useState(initialValue);
    const handleChange = (e) => setState(e.target.value);
    const reset = (e) => setState("");
    return [state, handleChange, reset];
}