import React from 'react';
import Navbar from "./Navbar/Navbar";
import {useSearchParams} from "react-router-dom";

const Sorted = () => {
    const [params,setParams]=useSearchParams()
    console.log(window.location.search)
    return (
        <div>
            <Navbar/>
        </div>
    );
};

export default Sorted;