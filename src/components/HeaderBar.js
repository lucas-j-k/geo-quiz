import React, { Component } from 'react';

//components


function HeaderBar(props){
    return (
      <div className="header">
        <div className="header__brand">Capital Cities</div>
        <div className="header__menu">
          <button className="header__restart">Restart</button>
        </div>
      </div>
    )
  }

export default HeaderBar;
