import { useState,useEffect } from "react"
import{
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal,
    Card,
    CardContent,
    CardActions,
    Typography,
    TablePagination,
} from "@mui/material"
import classes from "./style.module.css"
import { BackendApi } from "../../apicalls"

export const BookList=()=>{

    const[books,setBooks]=useState([]);

    const fetchBooks=async ()=>{
        const{books}=await BackendApi.book.getAllBooks();
        console.log(books);
        setBooks(books);
    }

    useEffect(()=>{
        fetchBooks().catch(console.error);
    },[])
    return(
        <>
           <div className={`${classes.pageHeader} ${classes.mb2}`}>
            <Typography variant="h5">Book List</Typography>
           </div>
        </>
    )
}