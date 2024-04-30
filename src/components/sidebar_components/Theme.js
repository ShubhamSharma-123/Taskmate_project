import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';

function Theme() {
  return (
    <div id='themeContainer'>
     <p id='lightTheme' > <FontAwesomeIcon id='lightIcon' icon={faSun} /> Light</p>
     <p > <FontAwesomeIcon icon={faMoon} /> Dark</p>
    </div>
  )
}

export default Theme