import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Default
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/legacy">
          Legacy
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
