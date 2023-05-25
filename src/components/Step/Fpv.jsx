import React from 'react';
import {createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, ThemeProvider} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Fpv = (props) => {
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
    const [fpv, setFpv] = useState(null);
    const handleChange = (event) => {
        props.onChangefpv(event.target.value)
        setFpv(event.target.value);

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
                    <Typography variant="subtitle1" align="center">Fpv технологія</Typography>
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
                            <FormLabel id="demo-radio-buttons-group-label">Наявність технології Fpv</FormLabel>
                            <RadioGroup
                                name="controlled-radio-buttons-group"
                                value={fpv}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Так" />
                                <FormControlLabel value="false" control={<Radio />} label="Ні" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Typography variant="subtitle2" align="center">Наявність технології fpv {fpv}</Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default Fpv;