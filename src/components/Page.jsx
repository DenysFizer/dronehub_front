import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {Link, Navigate} from "react-router-dom";
const Page = () => {
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    const [updatedlogin, setUpdatedlogin] = useState(email);
    const [updatedpass, setUpdatedpass] = useState(password);
    const [redirect, setRedirect] = useState(false);

    function viewlogin(){
        setUpdatedlogin(email)
    }
    function viewpass(){
        setUpdatedpass(password)
    }

    async function submit(){
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

        setRedirect(true);
    }
    if(redirect) {
        return (<Navigate to="/"/>)
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
                    error={email === ""}
                    helperText={email === "" ? 'Логін не може бути пустим!' : ' '}
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
                    error={password === ""}
                    helperText={password === "" ? 'Пароль не може бути пустим' : ' '}
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
                        submit();
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