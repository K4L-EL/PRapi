import React from 'react'

function Container(props) {
  return (
  
    <div className='innerContainer' >

        <p>{(props.dateValue).substr(0,10)},</p>
        <h1>{props.salaryDates}</h1>
        <h1>{props.bonusDates}</h1>

    
    </div>
    )
}

export default Container;