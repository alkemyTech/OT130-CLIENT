import React from "react";
import { Button } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { getLogout } from "../../reducers/auth/actions";

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
     e.preventDefault();
     dispatch(getLogout());
     window.location.href = '/';
    }
    
    return (
        <>
        <Button variant='secondary' onClick={(e) => handleLogout(e)}>LOGOUT</Button>
        </>
    )
};
export default Logout;