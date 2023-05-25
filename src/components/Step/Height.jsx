import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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

const Height = (props) => {
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
    const [height, setHeight] = useState(null);
    const handleChange = (event) => {
        if (event.target.value==="null"){
            props.onChange(event.target.value)
            setHeight(event.target.value);
            setTextview(true)
        }else{
            props.onChange(event.target.value)
            setHeight(event.target.value);
            setTextview(false)
        }

    };
    const handlField = (event) => {
        props.onChange(event.target.value)
        setHeight(event.target.value);
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
                <Typography variant="subtitle1" align="center">Висота</Typography>
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
                    <FormLabel id="demo-radio-buttons-group-label">Значення вказані в метрах</FormLabel>
                    <RadioGroup
                        name="controlled-radio-buttons-group"
                        value={height}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1500" control={<Radio />} label="1500 м" />
                        <FormControlLabel value="2500" control={<Radio />} label="2500 м" />
                        <FormControlLabel value="3500" control={<Radio />} label="3500 м" />
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
                <Typography variant="subtitle2" align="center">Висота {height}</Typography>
            </Box>
            </ThemeProvider>
        </div>
    );
};

export default Height;