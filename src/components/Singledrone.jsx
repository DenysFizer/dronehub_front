import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./Navbar/Navbar";
import {Card, CardMedia, Container, createTheme, Grid, Stack, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Singledrone = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(0,0,0,0.79)',
            },
            secondary:{
                main: 'rgb(255,255,255)'
            },
            hover:{
                main: 'rgba(87,87,87,0.35)'
            },
        },
        typography: {
            subtitle1: {
                fontSize: 95,
                fontWeight: 550,
            },
            subtitle2: {
                fontSize: 45,
                fontWeight: 550,
                fontFamily: "Stalinist One",

            },
            subtitle3: {
                fontSize: 25,
                fontWeight: 350,
                fontFamily: "Stalinist One",
            },
            subtitle4: {
                fontSize: 25,
                fontWeight: 350,
                fontFamily: "Stalinist One",

            },
            button: {

            },
            fontFamily: [
                'Rajdhani',
                'sans-serif',
                'Press Start 2P',
                'cursive',
                'Josefin Sans',
                'sans-serif',
                'Stalinist One',
                'cursive',

].join(','),
        },
    });
    const params = useParams()
    const [drone, setdrone]=useState('')
    let path =`/static/img/${drone.imgpath}.webp`;
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('http://localhost:8000/api/drones/'+ params.id,{
                headers:{'Content-type':'application/json'},
                credentials: 'include',
            })
            console.log(response)
           const content = await response.json()
            setdrone(content)
            console.log(content)
        }

        fetchMyAPI()
    }, [])
    return (
        <div>
            <Navbar/>
            <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={2}>
            <Box sx={{ fontSize: 25}}>
            <img style={{
                width:  600,
                height: 350,
                margin:35,
                }} src={path} alt="Logo" />
            </Box>
            <Container maxWidth={false}>
            <Box sx={{
                fontSize: 65,
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "bold",
                mt:5,
                fontFamily:"Rajdhani"
            }}
            >
                <Typography variant="subtitle1">{drone.creator}</Typography>
                <Typography variant="subtitle1">{drone.name}</Typography>
            </Box>
            </Container>
            </Stack>
                <Box bgcolor="primary.main"
                sx={{
                    mt:10,
                    mr:5,
                    ml:7,
                    mb:7,
                    pl:9,
                    pr:9,

                    borderRadius: '16px',
                }}
                >
                    <Box sx={{
                        textAlign: "center",
                        mt:5,
                    }}
                    >
                        <Typography variant="subtitle2" color="common.white">Характеристики</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6} key={1}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                     }}
                                >
                                <Typography variant="subtitle3" >Дальність(радіус)</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={2}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{drone.range} км</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={3}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle3" >Висота</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={4}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{drone.height} км</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={5}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle3" >Максимальна швидкість</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={6}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{drone.maxspeed} км/год</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={7}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle3" >Ємність батареї</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={8}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{drone.batterycap} мА/год</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={9}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle3" >Наявність тепловізора</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={10}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{`${ drone.vizor ? "Так" : "Ні"   }`}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={11}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle3" >Підтримка Fpv</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} key={12}>
                            <Box
                                sx={{
                                    "&:hover": {
                                        boxShadow: 15,
                                        bgcolor:"hover.main"
                                    },
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    // gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                    m:2,
                                    borderRadius: '16px',
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="subtitle4" >{`${ drone.fpv ? "ТАК" : "Ні"   }`}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </ThemeProvider>
        </div>
    );
};

export default Singledrone;