import React, {useContext} from 'react';
import {Navigate, Route, Routes, Switch} from "react-router-dom";
import About from "./About";
import Page from "./Page";
import Regpage from "./Regpage";
import Warning from "./UI/Error/Warning";
import {AuthContext} from "../context";
import Drones from "./Drones";
import Singledrone from "./Singledrone";
import Steper from "./Steper";
import Sorted from "./Sorted";


const Approuter = (props) => {
    const {isAuth,isLoading} =useContext(AuthContext)
    console.log(isAuth)
    if(isLoading){
        return (
            <h1>Загрузка</h1>
        )
    }
    return (
            isAuth
                ?
                <Routes>
                    <Route path="/about" element={<About name={props.name} />} />
                    <Route path="/error" element={<Warning />} />
                    <Route path="/steper" element={<Steper />} />
                    <Route exact path="/drones" element={<Drones />} />
                    <Route exact path="/drones" element={<Drones />} />
                    <Route exact path="/sortedrones" element={<Sorted />} />
                    <Route exact path="/drones/:id" element={<Singledrone />} />
                    <Route path="*" element={<Navigate to="/about" replace />} />
                </Routes>
                :
                <Routes>
                    <Route path="/login" element={<Page />} />
                    <Route path="/register" element={<Regpage />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
    );
};

export default Approuter;