import React, {useContext, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {Link, Navigate} from "react-router-dom";
import {AuthContext} from "../context";
const Page = () => {
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    const [updatedlogin, setUpdatedlogin] = useState(email);
    const [updatedpass, setUpdatedpass] = useState(password);
    const [redirect, setRedirect] = useState(false);
    const [errlog, setErrlog] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const {isAuth,setIsAuth}= useContext(AuthContext)

    function viewlogin(){
        setUpdatedlogin(email)
    }
    function viewpass(){
        setUpdatedpass(password)
    }

    async function submit1(){
        console.log({
            email,
            password
        })

        const response = await fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        if (response.status!==200){
            setErrlog(true)
            setIsloading(true)
            console.log('Помилка авторизації')

        }else {
            setIsAuth(true);
            localStorage.setItem('auth','true');
            setRedirect(true);
        }
        setIsloading(false)
    }
    if(redirect) {
        return (<Navigate to="/about"/>)
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    borderColor: 'error.main',
                    marginTop: 25,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: '16px',
                }}

                autoComplete="off"
            >
                <LockIcon fontSize="large"/>

                <TextField
                    id="outlined-basic"
                    margin="normal"
                    required
                    autoComplete="current-pas"
                    inputProps={{style: {fontSize: 30}}}
                    label="Логін"
                    variant="outlined"
                    error={email === "" || (errlog===true && !isloading)}
                    helperText={email === "" ? 'Пароль не може бути пустим' : errlog===true ? 'Помилка авторизації': ' '}
                    onChange={event => setemail(event.target.value)}
                />



                <TextField
                    id="outlined-basic"
                    label="Пароль"
                    margin="normal"
                    required
                    autoComplete="current-password"
                    inputProps={{style: {fontSize: 30}}}
                    variant="outlined"
                    error={password === "" || (errlog===true && !isloading)}
                    helperText={password === "" ? 'Пароль не може бути пустим' : errlog===true ? 'Помилка авторизації': ' '}
                    onChange={event => setpassword(event.target.value)}
                />

                <Button
                    color="success"
                    disabled = {password === "" || email === ""}
                    sx={{
                        margin: 1,

                    }}
                    variant="contained"
                    onClick={() => {
                        viewlogin();
                        viewpass();
                        submit1();
                    }
                    }>
                    Ввійти
                </Button>

            <Link to="/register" >
                <Button
                    variant="text"
                    onClick={() => {
                        viewlogin();
                        viewpass();
                    }
                    }>
                    Немає аккаунту? Зареєструйся.
                </Button>
            </Link>

            </Box>

            <h1> Login: {updatedlogin}</h1>
            <h1> Password: {updatedpass}</h1>
        </div>
    );
};

export default Page;