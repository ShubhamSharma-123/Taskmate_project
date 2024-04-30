// Menu.js


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faGlobe,faList,faBoxesStacked, faCalendarDays, faGear } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
  

  return (
    <div className='menucontainer'>
      <div id='menu' >
        <p>Menu </p>
        <p><FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
      </div>

    
        <div className='childComponentOfMenu'>

        <div><FontAwesomeIcon id='firstChildOfMenu' icon={faGlobe} /> Overview</div>
        <div><FontAwesomeIcon id='secondChildOfMenu' icon={faList}  /> Tasklist</div>
        <div id='divOfThirdChildOfMenu' ><FontAwesomeIcon id='thirdChildOfMenu' icon={faBoxesStacked} /> Project Overview</div>
        <div><FontAwesomeIcon id='fourthChildOfMenu' icon={faCalendarDays} />Calendar</div>
        <div> <FontAwesomeIcon id='fifthChildOfMenu' icon={faGear} /> Settings</div>
        </div>
     
    </div>
  );
};

export default Menu;
