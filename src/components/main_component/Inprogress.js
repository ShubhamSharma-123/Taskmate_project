import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSquarePlus, faStar, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./style/todo.css"

function Inprogress() {
  return (
    <div className='inprogress'>

<div className='text'>
        <p style={{ display: "flex", gap: "5px" }}>In Progress</p>
        <p className='threedots'>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faSquarePlus} />
        </p>
      </div>

      <div className='card' style={{ backgroundColor: "#F0DCC8" }}>
        <div className='date1' style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black" }}><FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#e19141", }} /> 28 Feb 2023</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>Testing and User Feedback</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>9:00AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
      </div>

      <div className='card' style={{ backgroundColor: "#D2F5CD" }}>
        <div className='date1' style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black" }}> 13 Feb 2023</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>Analyze Reaserch Data</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>7:30AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
      </div>


      <div className='card' style={{ backgroundColor: "#F5EBC8" }}>
        <div className='date1' style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black" }}> 28 Feb 2023</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>UX Research: Usability Testing</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>7:30AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
      </div>

      


    </div>
  )
}

export default Inprogress