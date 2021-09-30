import React from "react";
import './style.css';

let about = '/about',
    logo = '/';

function Header() {
    return (
      <>
      <header>
          <nav>
            <ul>
                <li className="logo"> <a href={logo}>LOGO</a></li>
                <li className="about"><a href={about}>Об организации</a></li>
            </ul>
          </nav>
      </header>
      </>
    );
  }
  
  export default Header;