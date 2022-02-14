import React from "react";
import { Button } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { getLogout } from "../../reducers/auth/actions";

const Logout = ({currentUser}) => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
     e.preventDefault();
     dispatch(getLogout());
     localStorage.removeItem('token');
     window.location.href = '/';
    }
    
    return (
        <>
        <h1>
            Welcome <span>{currentUser?.name}</span>
        </h1>
        <Button variant='secondary' onClick={(e) => handleLogout(e)}>LOGOUT</Button>
        </>
    )
};
export default Logout;