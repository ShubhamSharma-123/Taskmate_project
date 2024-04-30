import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './style/info.css';
import "./style/infodata.css"
import "./style/infosearch.css"

function Info() {
  return (
    <div className='info' >



      <div className='infodata'  >
       
          <div className='data'>
            <p style={{color:"#878787"}} className='key' id='priorityMargin'>Priority</p>
            <p className='tochange' id='medium'>Medium</p>
          </div>
          <div className='data'>
            <p style={{color:"#878787"}} className='key' id='dueDateMargin'>Due date</p>
            <p id="dueDateValue">28 Feb 2023</p>
          </div>
          <div className='data'>
            <p style={{color:"#878787"}}  id='tagsMargin'>Tags</p>
            <div className='tagsContainerValue'>
              <p id='meetings'>Meetings</p>
              <p id='uiDesign'>UI Design</p>
              <p id='development' >Development</p>
              <p id='uxResearch' >UX Research</p>
            </div>
          </div>
          <div className='data'>
            <p style={{color:"#878787"}} > Assignees</p>
            <div id='assigneesContainerValue'>
              <p className='sideUser'><img id='sideUserImg' src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph" alt='' /><p>Irvan Moses </p></p>
              <p className='sideUser' id='hatypoContainer'><img id='hatypoImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jFUQNU5T5CZbqUnv-l1VIiIl4Xkih71cM8R8tLY1MQ&s' alt='logo' /><p>Hatypo Studio</p></p>
              <p className='sideUser' id='more'>+2 more</p>
              <p id='plus' >+</p>
            </div>
          </div>
        </div>


        {/* <div className='data' id='value'   >
          <p className='tochange' id='medium'>Medium</p>
          <p id="dueDateValue">28 Feb 2023</p>
          <p id='tagsContainerValue' >
            <p className='tochange' id='meetings'>Meetings</p>
            <p className='tochange' id='uiDesign'>UI Design</p>
            <p className='tochange' id='development' >Development</p>
            <p className='tochange' id='uxResearch' >UX Research</p>
          </p>
          <p id="assigneesContainerValue"  >
            <p className='sideUser'><img id='sideUserImg' src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1873755476.1713984542&semt=sph" alt='' /><p>Irvan Moses </p></p>
            <p className='sideUser' id='hatypoContainer'><img id='hatypoImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jFUQNU5T5CZbqUnv-l1VIiIl4Xkih71cM8R8tLY1MQ&s' alt='logo' /><p>Hatypo Studio</p></p>
            <p className='sideUser' id='more'>+2 more</p>
            <p id='plus' >+</p>
          </p>
        </div> */}
     


      <div className='infosearch'>
        <p>Search task or project</p>
        <p><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
      </div>


    </div>
  )
}

export default Info