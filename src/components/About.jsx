import React, {useRef} from 'react';
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Box from "@mui/material/Box";
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {BatchPrediction} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const About = (props) => {
    let path =`/static/img/drone.jpg`;
    const [info, setInfo]=useState( {
        tanks:0,
        personnel:0,
        aircraft:0,
        artillery:0,
        uav:0,
        helicopters:0,
    })
    const [day, setday]=useState( {
        tanks:0,
        personnel:0,
        aircraft:0,
        artillery:0,
        uav:0,
        helicopters:0,
    })

    async function logout(){
        const response = await fetch('http://localhost:8000/api/logout',{
            headers:{'Content-type':'application/json'},
            credentials: 'include',
        })
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(0,0,0,0.79)',
            },
            secondary:{
                main: 'rgb(255,255,255)'
            },
            text:{
                main: 'rgba(255,255,255,0)'
            },
            cards:{
                main: 'rgb(15,155,0)'
            },
        },
        typography: {
            subtitle1: {
                fontSize: 43,
                fontWeight: 550,
                fontFamily: "Stalinist One",
            },
            subtitle2: {
                fontSize: 23,
                fontWeight: 350,
                fontFamily: "Stalinist One",
            },
            subtitle3: {
                fontSize: 35,
                fontWeight: 550,
                fontFamily: "Stalinist One",
            },
            subtitle4: {
                fontSize: 27,
                fontWeight: 550,
                fontFamily: "Stalinist One",
            },
            subtitle5: {
                fontSize: 19,
                fontWeight: 550,
                fontFamily: "Stalinist One",
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
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView()
    const newRef = useRef(null);
    const newScroll = () => newRef.current.scrollIntoView()
    const startRef = useRef(null);
    const startScroll = () => startRef.current.scrollIntoView()
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://russian-casualties.in.ua/api/v1/data/json/monthly',{
                headers:{'Content-type':'application/json'},
            })
            // console.log(response)
           const content = await response.json()

            let loses={
                tanks:0,
                personnel:0,
                aircraft:0,
                artillery:0,
                uav:0,
                helicopters:0,
            }

            // for (const mounth in Object.entries(content.data)) {

            // }
            Object.values(content.data).forEach(m=>{
                loses.personnel+=m.personnel
                loses.tanks+=m.tanks
                loses.aircraft+=m.aircraft
                loses.artillery+=m.artillery
                loses.uav +=m.uav
                loses.helicopters +=m.helicopters
            })
            // console.log(loses)
            setInfo(loses)

        }
        async function fetchLastdays() {
            let response = await fetch('https://russian-casualties.in.ua/api/v1/data/json/daily',{
                headers:{'Content-type':'application/json'},
            })
            // console.log(response)
            const content = await response.json()

            let loses={
                tanks:0,
                personnel:0,
                aircraft:0,
                artillery:0,
                uav:0,
                helicopters:0,
            }

            // for (const mounth in Object.entries(content.data)) {

            // }
            Object.values(content.data).forEach(m=>{
                loses.personnel=m.personnel
                loses.tanks=m.tanks
                loses.aircraft=m.aircraft
                loses.artillery=m.artillery
                loses.uav =m.uav
                loses.helicopters =m.helicopters
            })
            // console.log(loses)
            setday(loses)
        }
        fetchLastdays()
        fetchMyAPI()
    }, [])
    // const [name, setname]=useState('')
    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         let response = await fetch('http://localhost:8000/api/users',{
    //             headers:{'Content-type':'application/json'},
    //             credentials: 'include',
    //         })
    //         console.log(response)
    //        const content = await response.json()
    //         setname(content.name)
    //     }
    //
    //     fetchMyAPI()
    // }, [])
    return (
        <div>
            <div ref={startRef}>
            <Navbar/>
            </div>
            <ThemeProvider theme={theme}>
            <div class="container">
                <img class="homeimg"src="/home1.jpg"/>
                <div className="top">
                <Typography variant="subtitle1" color="common.white">Пошук  систем аеророзвідки</Typography>
                </div>
                <div className="bottom">
                    <Button
                        sx={{
                        mr:5,
                    }} variant="contained">
                        <Typography  variant="subtitle2" >Знайти</Typography>
                    </Button>
                    <Button onClick={executeScroll} color="secondary" variant="outlined">
                        <Typography variant="subtitle2" >Більше > </Typography>
                    </Button>
                </div>
            </div>
            <div ref={myRef} >
            <Box sx={{
                mt:8,
                mb:8,
            }}>
                <Typography variant="subtitle1"  sx={{
                    textAlign: 'center',
                }}> Про нас  </Typography>
             </Box>
             <Box  align="justify" sx={{
                 borderColor: 'primary.main',
                 borderTop: 5,
                 borderBottom: 5,
                 mt:5,
                 mb:15,
                 p:5,
                 pl:9,
                 pr:9,
             }}
             >
                <Typography align="justify" variant="subtitle3"  sx={{
                    m:5,
                }}> DRONE HUB - система для пошуку засобів для аеророзвідки. В ній представлені тільки зразки які можна знайти
                    в вільному доступі.
                </Typography>
                </Box>
            </div>
                <div className="container">
                    <img className="homeimg" src="/home2.jpg"/>
                    <div className="top">
                        <Typography variant="subtitle1" color="common.white">Моніторинг російських втрат</Typography>
                    </div>
                    <div className="bottom">

                        <Button color="secondary" sx={{
                                mr: 5,
                            }} variant="contained">
                            <Typography variant="subtitle2">Глянути</Typography>
                        </Button>
                        <Button onClick={newScroll} color="secondary" variant="outlined">
                            <Typography variant="subtitle2">Більше > </Typography>
                        </Button>
                    </div>
                </div>
                <div ref={newRef}>
                    <Box sx={{
                        m:5,
                    }}>
                        <Typography align="center" variant="subtitle2">Актуальні втрати</Typography>
                        {/*<Typography variant="subtitle2">Танків {info.tanks} за сьогодні {day.tanks}</Typography>*/}
                        {/*<Typography variant="subtitle2">Літаків {info.aircraft} за сьогодні {day.aircraft}</Typography>*/}
                        {/*<Typography variant="subtitle2">Артилерії {info.artillery} за сьогодні {day.artillery}</Typography>*/}
                        {/*<Typography variant="subtitle2">Бойових машин {info.uav} за сьогодні {day.uav}</Typography>*/}
                        {/*<Typography variant="subtitle2">Гелікоперів {info.helicopters} за сьогодні {day.helicopters}</Typography>*/}
                        <Grid
                            sx={{my:5}}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                        <Box
                            sx={{
                                bgcolor: 'secondary.main',
                                boxShadow: 1,
                                borderRadius: 4,
                                p: 2,
                                border: 3,
                                m:3,
                            }}
                        >
                            <Box ><Typography sx={{marginBottom:2}} variant="subtitle4" color="primary.main" component="p">Особового складу</Typography></Box>
                            <Box
                                sx={{ display: 'inline',
                                }}
                            >
                                <Typography variant="subtitle4"> {info.personnel}  </Typography>
                                <Typography color="cards.main" variant="subtitle5">  +     {day.personnel}</Typography>
                            </Box>
                        </Box>
                            <Box
                                sx={{
                                    bgcolor: 'secondary.main',
                                    boxShadow: 1,
                                    borderRadius: 4,
                                    p: 2,
                                    border: 3,
                                    m:3,
                                }}
                            >
                                <Box ><Typography variant="subtitle4" color="primary.main">Особового складу</Typography></Box>
                                <Box
                                    sx={{ display: 'inline' }}
                                >
                                    <Typography   display="inline" variant="subtitle4"> {info.personnel}  </Typography>
                                    <Typography color="cards.main" display="inline" variant="subtitle5">  +     {day.personnel}</Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                m:5,
                            }}
                        >
                        <IconButton onClick={startScroll} >
                            <ArrowUpwardIcon fontSize="large"/>
                        </IconButton>
                        </Box>
                    </Box>
                </div>

            {/*<div class="fill"  style = {{backgroundImage: "url(/home1.jpg)"}}>*/}

            {/*</div>*/}
            </ThemeProvider>
        </div>
    );
};

export default About;