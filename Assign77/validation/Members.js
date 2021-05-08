import axios from 'axios';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import Logout from './Logout';
import {router} from 'react-router-dom';

export default function Members() {
    const [tokenValue,setTokenValue] = useState({})

    useEffect(()=>{
        axios.get("/users/restrictedPage",{
            headers:{
                'token':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            var decoded = jwt_decode(localStorage.getItem('token'))
            console.log(decoded.user)
            setTokenValue(decoded.user)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <h1>Members</h1>
            <table border="|">
                <th>Id</th><th>Email</th>
                <tr><td>{tokenValue.id}</td><td>{tokenValue.email}</td></tr>
            </table>
            <Logout />
        </div>
    )
}   ;
