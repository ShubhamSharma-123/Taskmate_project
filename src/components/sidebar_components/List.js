
import React from 'react'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser, faPalette ,faLaptop,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function List() {
 
  return (
    <div className='listContainer' >
      <div id="list" >
        <p>List</p>
        <p><FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
      </div>

      
        <div className='childComponentOfList' >
        <div> <FontAwesomeIcon id='firstChildOfList' icon={faUser} style={{}}/>Personal</div>
        <div><FontAwesomeIcon id='secondChildOfList' icon={faPalette}/>Design</div>
        <div><FontAwesomeIcon id='thirdChildOfList' icon={faLaptop} />Development</div>
        <div><FontAwesomeIcon id='fourthChildOfList' icon={faMagnifyingGlass} />Research</div>
        </div>
     
    </div>
  )
}

export default List