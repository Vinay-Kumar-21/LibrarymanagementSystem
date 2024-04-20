import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate, Link } from "react-router-dom"
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"
import { useUser } from "../../context/user-context";
import { BookList } from "../books-list/books-list";
import { LoginDialog } from "../login/login-dialog";


export const AppLayout=()=>{

    const [openLoginDialog,setOpenLoginDialog]=useState(false);
    const[anchorE1User,setAnchorE1User]=useState(null);
    //const { user, loginUser, logoutUser, isAdmin } = useUser()
    const navigate=useNavigate();

    const handleCloseUserMenu=()=>{
        setAnchorE1User(null);
    }

    const handleOpenUserMenu=(event)=>{
        setAnchorE1User(event.currentTarget);
    }

    const handleLogout=()=>{
        //logoutUser();
        handleCloseUserMenu();
    }

    const handleLoginSubmit = (username, password) => {
        //loginUser(username, password)
        setOpenLoginDialog(false)
        console.log(username,password)
    }

    const handleLoginClose=()=>{
        setOpenLoginDialog(false);
    }


    return (
       <>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display:"flex", mr:1}}/>
                    <Link to="/" style={{textDecoration:"none",flexGrow:1}}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr:2,
                                display:"flex",
                                fontFamily:"monospace",
                                fontWeight:700,
                                letterSpacing:".3rem",
                                color:"white"
                            }}>
                                Library Management System
                            </Typography>
                    </Link>
                    <Box sx={{
                        flexGrow:0,
                    }}>
                        {/* {user ?(
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                                        <Avatar> 
                                            {user.username.charAt(0).toUpperCase()}
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu 
                                    sx={{mt:"45px"}}
                                    id="menu-appbar"
                                    anchorE1={anchorE1User}
                                    anchorOrigin={{
                                        vertical:"top",
                                        horizontal:"right"
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical:"top",
                                        horizontal:"right",
                                    }}
                                    open={Boolean(anchorE1User)}
                                    onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                Dashboard
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                            </>
                        ):( */}
                            <Button onClick={()=>{
                                setOpenLoginDialog(true)
                            }}
                            sx={{my:2,color:"white",display:"block"}}>
                                Login
                            </Button>
                        {/* )
                        } */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        
        <Routes>
            <Route path="/books" exact element={<BookList/>}/>
            <Route path="*" element={<Navigate to="/books" replace/>}/>
        </Routes>
        <LoginDialog
            open={openLoginDialog}
            handleSubmit={handleLoginSubmit}
            handleClose={handleLoginClose}
        />
       </>
    )
}