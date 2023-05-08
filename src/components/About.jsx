import React from 'react';
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const About = (props) => {

    async function logout(){
        const response = await fetch('http://localhost:8000/api/logout',{
            headers:{'Content-type':'application/json'},
            credentials: 'include',
        })


    }

    // const [name, setname]=useState('')
    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         let response = await fetch('http://localhost:8000/api/users',{
    //             headers:{'Content-type':'application/json'},
    //             credentials: 'include',
    //         })
    //         console.log(response)
    //        const content = await response.json()
    //         setname(content.name)
    //     }
    //
    //     fetchMyAPI()
    // }, [])
    return (
        <div>
       {props.name ? 'Hi' + props.name : 'you are not logged in' }

            <button
            onClick={logout}>
                <Link   to="/login">
                    logout
                </Link>
            </button>
        </div>
    );
};

export default About;