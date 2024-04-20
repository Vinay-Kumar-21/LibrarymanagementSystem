import { useState,forwardRef } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from "@mui/material"

const Transition=forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props}/>
})

export const LoginDialog=({open,handleClose,handleSubmit})=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        handleSubmit(username,password);
    }

    const handleEnterKeyDown=(e)=>{
        if(e.key==="Enter"){
            onSubmit(e);
        }
    }

    return(
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            onKeyDown={handleEnterKeyDown}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleClose}>
                    cancel
                </Button>
                <Button variant="contained" type="submit" onClick={onSubmit}>
                    Submit
                </Button> 
            </DialogActions>
        </Dialog>
    )
}