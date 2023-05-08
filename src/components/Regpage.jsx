import React,{useState} from "react";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {Link, Navigate} from "react-router-dom";
const Regpage = () => {
    const [name, setname]=useState('')
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    const [updatedname, setUpdatedname] = useState(name);
    const [updatedemail, setUpdatedemail] = useState(email);
    const [updatedpass, setUpdatedpass] = useState(password);
    const [redirect, setRedirect] = useState(false);


    function viewlogin(){
        setUpdatedname(name)
    }
    function viewemail(){
        setUpdatedemail(email)
    }
    function viewpass(){
        setUpdatedpass(password)
    }

    async function submit(){

        const response = await fetch('http://localhost:8000/api/register',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        setRedirect(true);

    }

    if(redirect) {
        return (<Navigate to="/login"/>)
    }
    return (
        <div>
            <Box
                component="form"
                sx={{
                    borderColor: 'error.main',
                    marginTop: 20,
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
                    sx={{ mt: 2 }}
                    inputProps={{style: {fontSize: 30}}}
                    label="Логін"
                    variant="outlined"
                    error={name === ""}
                    helperText={name === "" ? 'Логін не може бути пустим!' : ' '}
                    onChange={event => setname(event.target.value)}
                />



                <TextField
                    id="outlined-basic"
                    label="Email"
                    margin="normal"
                    required
                    autoComplete="current-password"
                    sx={{ mt: 0 }}
                    inputProps={{style: {fontSize: 30}}}
                    variant="outlined"
                    error={email === ""}
                    helperText={email === "" ? 'Пароль не може бути пустим' : ' '}
                    onChange={event => setemail(event.target.value)}
                />

                <TextField
                    id="outlined-basic"
                    label="Пароль"
                    margin="normal"
                    required
                    autoComplete="current-password"
                    sx={{ mt: 0 }}
                    inputProps={{style: {fontSize: 30}}}
                    variant="outlined"
                    error={password === ""}
                    helperText={password === "" ? 'Email не може бути пустим' : ' '}
                    onChange={event => setpassword(event.target.value)}
                />
                <Button
                    color="success"
                    disabled = {password === "" || name === ""}
                    sx={{
                        margin: 1,

                    }}
                    variant="contained"
                    onClick={() => {
                        viewlogin();
                        viewpass();
                        viewemail();
                        submit();
                    }
                    }>

                    Зареєструватися
                </Button>
                <Link to="/login" >
                    <Button
                    variant="text"
                    onClick={() => {
                        viewlogin();
                        viewpass();
                        viewemail()
                    }
                    }>
                    Є аккаунт? Залогінся.
                </Button>
                </Link>

            </Box>
            <h1> Login: {updatedname}</h1>
            <h1> Password: {updatedpass}</h1>
            <h1> Email: {updatedemail}</h1>
        </div>
    );
};

export default Regpage;