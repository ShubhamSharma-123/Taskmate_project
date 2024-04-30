import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSquarePlus, faStar, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./style/todo.css"

function Todo() {

  return (
    <div className='todo'>
      <div className='text'>
        <p style={{ display: "flex", gap: "5px" }}>Todo<p style={{ border: "1px solid gray", borderRadius: "50%", height: "15px", width: "15px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(233, 230, 230)" }}> <p style={{ border: "3px solid rgb(255, 145, 0)", borderRadius: "100%", height: "2px", width: "2px" }}> </p></p></p>
        <p className='threedots'>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faSquarePlus} />
        </p>
      </div>

      <div className='card' style={{ backgroundColor: "#F5EBC8" }}>
        <div className='date1' style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black" }}><FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#e19141", }} /> Today</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>Create a Visual Style Guide</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>9:00AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
      </div>

      <div className='card' style={{ backgroundColor: "#CDE6F5" }}>
        <div className='date1' style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black" }}> 18 Feb 2023</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>Slicing Landing Page</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>7:30AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
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
          <p style={{ color: "black" }}> 02 March   2023</p>
          <p><FontAwesomeIcon icon={faCircleArrowRight} style={{ rotate: "-30deg", color: "rgb(129, 129, 129)" }} /></p>
        </div>

        <div className='content'>Create User</div>

        <div className='time' style={{ display: "flex", justifyContent: "space-between" }} >
          <p>9:00AM-9:30AM</p>
          <img style={{ height: "20px", borderRadius: "50%" }} src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph' alt='' />
        </div>
      </div>


      


    </div>

  )
}

export default Todo