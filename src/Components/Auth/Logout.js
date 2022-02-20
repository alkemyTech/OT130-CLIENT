import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLogout } from '../../reducers/auth/actions';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(getLogout());
  };

  return (
    <>
      <Nav.Link as={NavLink} to="/" onClick={(e) => handleLogout(e)}>
        Logout
      </Nav.Link>
    </>
  );
};
export default Logout;
