import React from 'react'
import "./style/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className='header'>
            <div id='head'>
                <div className='title'>
                    <p>Projects / My Project</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p id='project'>My Project</p>
                        <span><FontAwesomeIcon icon={faChevronUp} rotation={180} /></span>
                    </div>
                </div>

                <p className='date'><FontAwesomeIcon icon={faCalendarDays} />12 Feb 2023</p>
            </div>
        </div>
    )
}

export default Header