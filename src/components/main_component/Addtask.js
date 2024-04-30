import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSquarePlus, } from '@fortawesome/free-solid-svg-icons';


function Addtask() {
  return (
    <div className='addtask'>
        <div className='text'>
                <p style={{ display: "flex", gap: "5px" }}></p>
                <p className='threedots' style={{display:"flex",justifyContent:"space-between",gap:"10px"}}>
                    <FontAwesomeIcon icon={faEllipsis} />
                    <FontAwesomeIcon icon={faSquarePlus} />
                </p>
            </div>
    </div>
  )
}

export default Addtask