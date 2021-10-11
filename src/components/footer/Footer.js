import React from "react";
import './style.css';

let aboutPol = '/aboutPol';
let mail = 'mailto:example@mail.com';

function Footer() {
    return (
      <>
      <footer>
            <div>
                <ul>
                    <li className="mail"><a href={mail}> Поддержка: example@mail.com</a></li>
                    <li className="politica"><a href={aboutPol}>Политика конфедициальности</a></li>
                </ul>
            </div>
        </footer>
      </>
    );
  }
  
  export default Footer;