import React from 'react'
import { Link } from 'react-router-dom';

export const SideBarLink = ({path, componet}) => {
  return (
    <>
    <Link to={path} innerRef={componet} />
    </>
  )
}
