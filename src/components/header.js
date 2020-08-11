import React from 'react';
import Logo from '../img/discord.png'

function Header() {
  return (
    <div className="Header p-5">
      <header>
        <h1>FF.net Fleurmione Stories</h1>
        <a href = {'https://discord.gg/3ax2ezV'} target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="Discord link" style={{width: "150px"}}></img>
        </a>
      </header>
    </div>
  )
}

export default Header;