import React from 'react';
import {Button} from "@mui/material";

const Buttons = ({children}) => {
    return <Button variant='outlined'>{children}</Button>
};

export default Buttons;