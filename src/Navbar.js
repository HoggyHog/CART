import React from 'react'

function Navbar(props) {
  return (
    <div className="navbar">
        <img className="basket" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"/>
        <div className="basket-counter">{props.CountItems()}</div>
    </div>
  )
}

export default Navbar