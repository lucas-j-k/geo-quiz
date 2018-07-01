import React, { Component } from 'react';

//components


function HeaderBar(props){
    return (
      <div className="header">
        <div className="header__brand">Capital Cities</div>
        <div className="header__menu">
          <a href="../" className="header__restart">Restart</a>
        </div>
      </div>
    )
  }

export default HeaderBar;
