import React from 'react'

function Navbar(props) {
  return (
    <div class="navbar">
        <img class="basket" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"/>
        <div class="basket-counter">{props.CountItems()}</div>
    </div>
  )
}

export default Navbar