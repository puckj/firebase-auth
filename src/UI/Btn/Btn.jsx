import React from 'react';
import { Button } from '@material-ui/core';

const Btn = (props) =>{
    return(
    <Button variant="contained" color={props.color} onClick={props.click}>{props.children}</Button>
    )
}

export default Btn;