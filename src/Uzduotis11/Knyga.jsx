import React from 'react'
 
// priima props (knygos objektą)
const Knyga = (props) => {
  const { pav, autorius, kaina } = props.knyga;
 
  let vertinimas = '';
  if (kaina > 30) {
    vertinimas = 'Knyga brangi';
  } else if (kaina >= 10) {
    vertinimas = 'Knyga kainuoja vidutiniškai';
  } else {
    vertinimas = 'Knyga pigi';
  }
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų
  return (
    <div>
      <p>Pavadinimas: {pav}</p>
      <p>Autorius: {autorius}</p>
      <p>Kaina: {kaina} €</p>
      <p>{vertinimas}</p>
    </div>
  )
}

export default Knyga