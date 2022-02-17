import React from 'react';
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
    <div>
      <NavLink to="/" onClick={(e) => handleLogout(e)}>
        Logout
      </NavLink>
    </div>
  );
};
export default Logout;
