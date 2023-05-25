import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {createTheme, Icon, ThemeProvider} from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import {useContext} from "react";
import {AuthContext} from "../../context";
import Mylogo from './logoo.svg';

function Navbar() {
    const{isAuth,setIsAuth}=useContext(AuthContext);
    async function logout(){
        const response = await fetch('http://localhost:8000/api/logout',{
            headers:{'Content-type':'application/json'},
            credentials: 'include',
        })
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: '#000000',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#ffffff',
            },
        },
    });
    const styles = {
        button: {
            width: 74, height: 74,
            padding: 0
        },
        icon: {
            fontSize:65,
            color:'#fffff'
        },
        tooltip: {
            marginLeft:7
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static"
                    sx={{
                        mt: 0,
                    }}>
                <Toolbar>

                    <IconButton
                        style={styles.button}
                        iconStyle={styles.icon}
                        tooltipStyles={styles.tooltip}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            ml:1,
                            mr:2,

                    }}
                    >
                        <Link  to="/about">
                            {/*<AndroidIcon fontSize={"large"} color={"secondary"} sx={{*/}
                            {/*    mr:0,*/}
                            {/*}}/>*/}
                            <Icon className="svg_icons">
                            <img src={Mylogo} height={18} width={25} alt="React Logo" />
                            </Icon>
                        </Link>
                    </IconButton>

                    <Typography variant="h6" component="div"
                                sx={{
                                    flexGrow: 1,
                                    fontSize:25,
                                    fontWeight:'bold',
                                    }}>
                                        DRONE HUB
                            </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={logout}
                    >
                        <Link  to="/login">
                        <LogoutIcon color={"secondary"} fontSize="large"/>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
export default Navbar;