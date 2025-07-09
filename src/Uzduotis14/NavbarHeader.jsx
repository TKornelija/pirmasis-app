import React from 'react'

// padarykite kad šis komponentas priimtų reikiamą informaciją
const NavbarHeader = ({ headerText }) => {
  // gautą informaciją išveskite h1 dalyje
  return (
    <h1>{headerText}</h1>
  )
}

export default NavbarHeader