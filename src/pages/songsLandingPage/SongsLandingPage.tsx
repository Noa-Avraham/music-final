import { Console } from "console";
import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search'
import { SongModel } from "../../songModel";


export default function SongLandingPage(props: any) {
    const navigate = useNavigate();
    let n = 0;

    let keys = Object.keys({ id: 123, title: "Avraham Fried", artist: "Keep Climbing", length: 4, price: 30, gener: "POP" })

    const handleAddButton = () => {

        navigate("/songs/add")
    }

    const handleEditButton = (song: SongModel) => {

        navigate("/songs/edit/" + `${song.id}`)
    }
    const [artist, setArtist] = useState("");

    const handleSearch = () => {
        props.search(artist)
    }


    return (
        <>

            <h1 style={{ display: "", textAlign: 'center', fontSize: '60px', fontFamily: 'Cooper Black', color: 'purple' }}>The Song Shop</h1>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: "inline", float: "top" }}
                noValidate
                autoComplete="off"
                display={"inline"}
            >
                <TextField id="outlined-basic" label="Search by artist" variant="outlined" onChange={(e) => setArtist(e.target.value)} ></TextField>
            </Box>

            <IconButton aria-label="search">
                <SearchIcon fontSize="large" style={{ color: "purple" }} onClick={() => handleSearch()} ></SearchIcon>
            </IconButton>

            <Box sx={{ '& > :not(style)': { m: 1 }, float: "right" }}>

                <Fab size="medium" color="secondary" aria-label="add">
                    <AddIcon onClick={() => handleAddButton()} />
                </Fab>

            </Box>





            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            {Object.keys({ ...props.songs[0] }).map((key) => { return <TableCell key={n++} style={{ color: "purple", fontSize: "larger", fontWeight: "bold" }} align="center">{key}</TableCell> })}


                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {props.songs.map((s: SongModel) => {

                            return (
                                <TableRow
                                    key={s.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">
                                        <IconButton aria-label="delete">
                                            <DeleteIcon style={{ color: "purple" }} onClick={() => props.deleteButton(s.id)} />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <EditIcon fontSize="medium" style={{ color: "purple" }} onClick={() => handleEditButton(s)} />
                                        </IconButton>
                                    </TableCell>

                                    {Object.entries(s).map(([key, val]) => { return <TableCell key={n++} align="center">{val}</TableCell> })}


                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </>




    )

}