import React from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import './Navbar.css'

const Navbar = () => {
  let navbarData = {
    header_text: 'Projektas ABC',
    links: [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos' },
        { id: 3, url: '/projektai', title: 'Projektai' },
        { id: 4, url: '/apie-mus', title: 'Apie mus' },
        { id: 5, url: '/kontaktai', title: 'Kontaktai' },
    ]
  }

  return (
    <nav>
        {<NavbarHeader headerText={navbarData.header_text} />}
        {<NavbarLinks links={navbarData.links} />}
    </nav>
  )
}

export default Navbar