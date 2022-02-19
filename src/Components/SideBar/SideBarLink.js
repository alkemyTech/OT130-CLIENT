import React from 'react'
import { Link } from 'react-router-dom';

export const SideBarLink = ({ route, link }) => {
  return (
    <>
      <Link
        to={route}
        className="bm-item"
      >
        {link}
      </Link>
    </>
  )
};