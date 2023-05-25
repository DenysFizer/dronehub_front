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

const Battarycap = (props) => {
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
    const [battary, setBattary] = useState(null);
    const handleChange = (event) => {
        if (event.target.value==="null"){
            props.onChangebattary(event.target.value)
            setBattary(event.target.value);
            setTextview(true)
        }else{
            props.onChangebattary(event.target.value)
            setBattary(event.target.value);
            setTextview(false)
        }

    };
    const handlField = (event) => {
        props.onChangebattary(event.target.value)
        setBattary(event.target.value);
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
                    <Typography variant="subtitle1" align="center">Ємність батареї</Typography>
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
                            <FormLabel id="demo-radio-buttons-group-label">Значення вказані в мА/год</FormLabel>
                            <RadioGroup
                                name="controlled-radio-buttons-group"
                                value={battary}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="5000" control={<Radio />} label="5000 мА/год" />
                                <FormControlLabel value="10000" control={<Radio />} label="10000 мА/год" />
                                <FormControlLabel value="15000" control={<Radio />} label="15000 мА/год" />
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
                    <Typography variant="subtitle2" align="center">Ємність батареї {battary}</Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default Battarycap;