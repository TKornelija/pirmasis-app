import React from 'react'
import Knyga from './Knyga'
  
  // susikurkite tris atskirus knygų objektus
  // su informacija

  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus
   
  const Knygynas = () => {
  const pirma = {
    pav: 'Altorių šešėly',
    autorius: 'Vincas Mykolaitis-Putinas',
    kaina: 35
  }

  const antra = {
    pav: 'Mažasis princas',
    autorius: 'Antoine de Saint-Exupery',
    kaina: 15
  }

  const trecia = {
    pav: 'Alchemikas',
    autorius: 'Paulas Koeljas',
    kaina: 7
  }
  return (
    <div>
      <Knyga knyga={pirma} />
      <Knyga knyga={antra} />
      <Knyga knyga={trecia} />
      </div>
  )
}

export default Knygynas