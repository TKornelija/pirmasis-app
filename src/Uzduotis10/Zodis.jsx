import React from 'react'

// šis komponentas turi priimti props
const Zodis = (props) => {
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  const {zodis} = props;
  return (
    <div>
      <p>Zodis: {zodis}</p>
      <p>Simboliu kiekis: {zodis.length}</p>
    </div>
  )
}

export default Zodis