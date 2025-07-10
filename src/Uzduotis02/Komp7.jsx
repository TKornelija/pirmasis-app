import React from 'react'

const Komp7 = () => {
  const zodziai= ['Duona', 'Sviestas', 'Suris', 'Mesa']
  // susikurkite žodžių masyvą (tiesiog string reikšmės,
  // ne objektai)
  // ir tą masyvą atvaizduokite return dalyje

  return (
    <div>
      {zodziai.join(', ')}
    </div>
  )
}

export default Komp7