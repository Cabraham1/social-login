import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({User}) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className='link' to="/">Flexisaf internship</Link>
      </span>
      {
        User ? (
          
          <ul className="list">
        <li className="listitem">
          <img
            src="https://avatars.githubusercontent.com/u/68823331?v=4"
            alt=""
            className="avatar"
            />
        </li>
        <li className="listitem">Christopher abraham</li>
        <li className="listitem">logout</li>
      </ul>
    ) : (<Link className='link' to="Login">Login</Link>)
    }
    </div>
  );
}

export default Navbar