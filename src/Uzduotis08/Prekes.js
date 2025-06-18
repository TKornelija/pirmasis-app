import Funkcijos from './Funkcijos';

const prekes=()=>{
    const prekiuSarasas=[
        {id: 1, kodas: '001', pavadinimas: 'Duona', kaina: 2.38, savikaina: 1.0, kiekis: 30},
        {id: 2, kodas: '002', pavadinimas: 'Sviestas', kaina: 3.50, savikaina: 1.34, kiekis: 7},
        {id: 3, kodas: '003', pavadinimas: 'Cukrus', kaina: 1.12, savikaina: 0.47, kiekis: 14},
    ];
      
    const brangiausia = Funkcijos.brangiausiaPreke(prekiuSarasas);
    const pigiausia = Funkcijos.pigiausiaPreke(prekiuSarasas);
    const vidurkis = Funkcijos.Vidurkis(prekiuSarasas);
    const cukrus = prekiuSarasas.find(p => p.pavadinimas === 'Cukrus');
    const pelnasCukraus = Funkcijos.Pelnas(cukrus);
  
    return (
  <div>
    <h1>Prekių sąrašas</h1>
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Kodas</th>
          <th>Pavadinimas</th>
          <th>Kaina (€)</th>
          <th>Savikaina (€)</th>
          <th>Kiekis</th>
        </tr>
      </thead>
      <tbody>
        {prekiuSarasas.map(preke => (
          <tr key={preke.id}>
            <td>{preke.id}</td>
            <td>{preke.kodas}</td>
            <td>{preke.pavadinimas}</td>
            <td>{preke.kaina.toFixed(2)}</td>
            <td>{preke.savikaina.toFixed(2)}</td>
            <td>{preke.kiekis}</td>
          </tr>
        ))}
      </tbody>
    </table>
       <ul>
        <li>Brangiausia prekė: {brangiausia.pavadinimas} - {brangiausia.kaina.toFixed(2)} €</li>
        <li>Pigiausia prekė: {pigiausia.pavadinimas} - {pigiausia.kaina.toFixed(2)} €</li>
        <li>Kainų vidurkis: {vidurkis.toFixed(2)} €</li>
        <li>Cukraus galimas pelnas: {pelnasCukraus.toFixed(2)} €</li>
      </ul>
  </div>
);
}

export default prekes;

