import { useState } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';



function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='user' onClick={toggleDropdown} >
      <div id='userimage'>
        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph" alt='' />
      </div>
      <h4 style={{ color: "black" }}>
        Irvan Moses
        <span><FontAwesomeIcon icon={faChevronUp} rotation={180} /></span>
        {isOpen && <p id='useremail'>irvanmoses10@gmail.com</p>}
      </h4>

    </div>
  )
}

export default User