import React, {useState} from "react";
import Page from "./components/Page";
import Regpage from "./components/Regpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import {useEffect} from "react";
function App() {
    const [name, setname]=useState('')
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

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<About name={name} />} />
                  <Route path="/login" element={<Page />} />
                  <Route path="/register" element={<Regpage />} />

              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
