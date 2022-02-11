import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../../features/auth/authSlice";


const Logout = () => {

    const userAuth = useSelector(selectAuth)
    const dispatch = useDispatch();

    const handleLogout = (e) => {
     e.preventDefault()
     dispatch(logout())
     localStorage.removeItem('token');
     window.location.href = '/';
    }
    return (
        <>
        <h1>
            Welcome <span>{userAuth.name}</span>
        </h1>
        <Button variant='secondary' onClick={(e) => handleLogout(e)}>LOGOUT</Button>
        </>
    )
};
export default Logout;