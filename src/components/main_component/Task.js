import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./style/task.css"
import Todo from './Todo';
import Inprogress from './Inprogress';
import Complete from './Complete';
import Overdue from './Overdue';
import Addtask from './Addtask';


function Task() {
    return (
        <div className='task'>
            <div id="taskfilters">
                <div id='new'>New Task <FontAwesomeIcon style={{ border: "1px solid rgb(255, 189, 132)", borderRadius: "50%", marginLeft: "4px", backgroundColor: "rgb(255, 189, 132)" }} icon={faChevronUp} rotation={180} /></div>
                <div id='filterContainer' >
                    <p className='filter'>Filter <FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
                    <p className='filter'>Sort <FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
                    <p className='filter'>Label <FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
                    <p className='filter' >Category <FontAwesomeIcon icon={faChevronUp} rotation={180} /></p>
                </div>
            </div>

            <div className='tasklist' style={{ backgroundColor: "#F5F5F5"}}>
                <Todo/>
                <Inprogress/>
                <Complete/>
                <Overdue/>
                <Addtask/>
            </div>
        </div>
    )
}

export default Task