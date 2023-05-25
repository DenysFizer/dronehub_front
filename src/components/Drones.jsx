import React, {useState} from 'react';
import Navbar from "./Navbar/Navbar";
import {useEffect} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Newcard from "./UI/Newcard/Newcard";


const Drones = () => {
    const [content, setcontent] = useState([])
    useEffect(() => {

        async function fetchMyAPI() {
            let response = await fetch('http://localhost:8000/api/drones',{
                headers:{'Content-type':'application/json'},
                credentials: 'include',
            })
            console.log(response)
            const content = await response.json()
            setcontent(content)
            console.log(content)
        }

        fetchMyAPI()
    }, [])
    return (
        <div>
            <Navbar/>

            <Grid container spacing={20}>
                {content.map((content) =>
                    <Grid  key={content.id} item><Newcard content={content}/></Grid>
                )}


            </Grid>
        </div>
    );
};

export default Drones;