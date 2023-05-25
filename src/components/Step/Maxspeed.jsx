import React from 'react';
import {
    createTheme,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    ThemeProvider
} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Maxspeed = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(0,0,0,0.79)',
            },
            secondary:{
                main: 'rgb(255,255,255)'
            },
        },
        typography: {
            subtitle1: {
                fontSize: 43,
                fontWeight: 550,
                fontFamily: "Stalinist One",
            },
            subtitle2: {
                fontSize: 30,
                fontWeight: 350,
                fontFamily: "Stalinist One",
            },
            fontFamily: [
                'Stalinist One',
                'cursive',

            ].join(','),
        },
    });
    const [textView, setTextview] = useState(false);
    const [speed, setSpeed] = useState(null);
    const handleChange = (event) => {
        if (event.target.value==="null"){
            props.onChangespeed(event.target.value)
            setSpeed(event.target.value);
            setTextview(true)
        }else{
            props.onChangespeed(event.target.value)
            setSpeed(event.target.value);
            setTextview(false)
        }

    };
    const handlField = (event) => {
        props.onChangespeed(event.target.value)
        setSpeed(event.target.value);
    };


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box
                    // display="flex"
                    // alignItems="center"
                    // justifyContent="center"
                    flexDirection="colomn"
                    sx={{
                        mt:5,
                        mb:7,

                    }}>
                    <Typography variant="subtitle1" align="center">Швидкість</Typography>
                    <Typography variant="subtitle2" align="center">Бла бла бла бла бла</Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="colomn"
                        sx={{
                            mt:5,
                            mb:3,
                        }}
                    >
                        <FormControl className="centerform" >
                            <FormLabel id="demo-radio-buttons-group-label">Значення вказані в кілометрах на годину</FormLabel>
                            <RadioGroup
                                name="controlled-radio-buttons-group"
                                value={speed}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="50" control={<Radio />} label="50 км/год" />
                                <FormControlLabel value="75" control={<Radio />} label="75 км/год" />
                                <FormControlLabel value="90" control={<Radio />} label="90 км/год" />
                                <FormControlLabel value="null" control={<Radio />} label="інше" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="colomn"
                        sx={{
                            mb:5,
                        }}
                    >
                        {textView &&
                            <TextField
                                onChange={handlField}
                                id="outlined-basic"
                                label="Введіть значення"
                                variant="outlined"/>
                        }
                    </Box>
                    <Typography variant="subtitle2" align="center">Швидкість {speed}</Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default Maxspeed;