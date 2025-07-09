import React from 'react'

// padarykite kad šis komponentas priimtų props (vieno projekto objektą)
const Projektas = ({projektas}) => {
  // išveskite visą turimą projekto informaciją
  return (
    <div>
      <h3>{projektas.pavadinimas}</h3>
      <p>Tipas: {projektas.tipas}</p>
      <p>Atlikimo data: {projektas.atlikimo_data}</p>
    </div>
  )
}

export default Projektas