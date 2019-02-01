import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/qr-reader-pwa">
          Default
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/qr-reader-pwa/legacy">
          Legacy
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
