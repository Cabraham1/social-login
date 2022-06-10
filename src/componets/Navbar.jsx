import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Flexisaf internship</span>
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
    </div>
  );
}

export default Navbar