import React from 'react'

import './main.css'
import Header from './main_component/Header'
import Info from './main_component/Info'
import Task from './main_component/Task'

function Main() {
  return (
    <div className='main'>
      <Header/>
       <Info/>
      <Task/> 
    </div>
  )
}

export default Main