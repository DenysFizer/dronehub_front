import React, {useState} from "react";
import Page from "./components/Page";
import Regpage from "./components/Regpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Approuter from "./components/Approuter";
import {AuthContext} from "./context";
function App() {
    const [name, setname]=useState('');
    const [isAuth,setIsAuth]=useState(false);
    const [isLoading,setLoading]=useState(true);


    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setLoading(false)
    },[])

    useEffect(() => {

        async function fetchMyAPI() {
            let response = await fetch('http://localhost:8000/api/users',{
                headers:{'Content-type':'application/json'},
                credentials: 'include',
            })
            console.log(response)
            const content = await response.json()
            setname(content.name)
        }

        fetchMyAPI()
    }, [])
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
     setLoading(false)
    },[])

  return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
      <div className="App">
          <BrowserRouter>
                  <Approuter name={name}/>
          </BrowserRouter>
      </div>
        </AuthContext.Provider>

  );
}

export default App;
