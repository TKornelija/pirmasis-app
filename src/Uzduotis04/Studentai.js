const Studentai = () => {
  
  const studentas1 = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 20,
    pazymiai: [8, 9, 10]
  };

  const studentas2 = {
    vardas: 'Petras',
    pavarde: 'Petraitis',
    amzius: 22,
    pazymiai: [4, 6, 8]
  };
 
  const kurisVyresnis = () => {
    if (studentas1.amzius > studentas2.amzius) {
      return `${studentas1.vardas} yra vyresnis.`;
    } else if (studentas1.amzius < studentas2.amzius) {
      return `${studentas2.vardas} yra vyresnis.`;
    } else {
      return 'studentai yra vienodo amziaus.';
    }
  };

 
  const kurioVidurkisMazesnis = () => {
    const vidurkis1 = studentas1.pazymiai.reduce((a, b) => a + b, 0) / studentas1.pazymiai.length;
    const vidurkis2 = studentas2.pazymiai.reduce((a, b) => a + b, 0) / studentas2.pazymiai.length;

    if (vidurkis1 < vidurkis2) {
      return `${studentas1.vardas} turi mazesni pazymiu vidurki (${vidurkis1.toFixed(2)}).`;
    } else if (vidurkis1 > vidurkis2) {
      return `${studentas2.vardas} turi mazesni pazymiu vidurki (${vidurkis2.toFixed(2)}).`;
    } else {
      return 'studentai turi vienoda pazymiu vidurki.';
    }
  };
 
  return (
    <div>
      <h2>Studentų informacija</h2>
      
      <h3>{studentas1.vardas} {studentas1.pavarde}</h3>
      <p>Amžius: {studentas1.amzius}</p>
      <p>Pažymiai: {studentas1.pazymiai.join(', ')}</p>

      <h3>{studentas2.vardas} {studentas2.pavarde}</h3>
      <p>Amžius: {studentas2.amzius}</p>
      <p>Pažymiai: {studentas2.pazymiai.join(', ')}</p>

      <hr />
      <h4>{kurisVyresnis()}</h4>
      <h4>{kurioVidurkisMazesnis()}</h4>
    </div>
  );
};

export default Studentai;