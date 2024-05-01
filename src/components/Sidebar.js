import React from 'react'
import User from './sidebar_components/User'
import Menu from './sidebar_components/Menu'
import List from './sidebar_components/List'
import "./sidebar.css"
import Theme from './sidebar_components/Theme'


function Sidebar({ isOpen, toggleSidebar }) {
    return (

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='logo'>
                <p id='logo'><span style={{ color: "#Ee8644" }}>Task</span>mate</p>
                <p id='decs'>Focus. Prioritize. Execute.</p>
            </div>
          
            <User /> 
            <Menu />
            <List />
            <Theme />

        </div>
    )
}

export default Sidebar