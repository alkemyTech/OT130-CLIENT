import React from 'react';
import { Button } from 'react-bootstrap';
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
    <div className='d-flex justify-content-center align-items-center'>
      <Button as={NavLink} to="/" onClick={(e) => handleLogout(e)} className="btn-somos-mas">
        Logout
      </Button>
    </div>
  );
};
export default Logout;
