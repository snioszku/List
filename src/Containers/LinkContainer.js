import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkContainer = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '' : '/' + filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);

export default LinkContainer;
