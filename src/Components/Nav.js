import React, { useEffect } from 'react'
import '../styles/Nav.css'
import { useState } from 'react';
function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src="https://www.clipartmax.com/png/full/215-2154144_transparent-background-netflix-logo.png" alt="Netflix logo" className="nav__logo"/>
      <a href="https://github.com/aymanesarrar"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="avatar logo" className="nav__avatar" /></a>

    </div>
  )
}

export default Nav
