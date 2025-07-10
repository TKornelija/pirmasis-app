import logo from './logo.svg';
import './App.css';
import Knyga from './Uzduotis11/Knyga';
// import Komp6, { Komp5 } from './Komponentai/Komp6'
// import Paslaugos from './Paslaugos/Paslaugos';
// import Svetaine from './Uzduotis03/Svetaine'
// import Studentai from './Uzduotis04/Studentai';
// import Kintamieji from './Uzduotis05/Kintamieji';
// import Masyvas from './Uzduotis06/Masyvas';
// import Skaiciai from './Uzduotis07/Skaiciai'
// import Prekes from './Uzduotis08/Prekes';
// import Child from './Uzduotis09/Child';
// import Zodziai from './Uzduotis10/Zodziai';
// import Knygynas from './Uzduotis11/Knygynas';
// import ParentComp from './Uzduotis12/ParentComp';
// import Projektai from './Uzduotis13/Projektai';
// import Navbar from './Uzduotis14/Navbar';
import Komp7 from './Uzduotis02/Komp7';
import Komp8 from './Uzduotis02/Komp8';
import Komp9 from './Uzduotis02/Komp9';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/*
        <Paslaugos/>
        <Komp4/>
        <Komp5/>
        <Komp6/>
       */}

       {/*<Svetaine/>
       <Studentai/>
       */}

       {/*<Kintamieji/>
       <Masyvas/>
       <Skaiciai/>
       <Prekes/>
       <Child/>
       <Zodziai/>
       <Knygynas/>
       <ParentComp/>
       <Projektai/>
       <Navbar/>
       */}
      <Komp7/>
      <Komp8/>
      <Komp9/>

      </header>
    </div>
  );
}

export default App;

function Komp4 (){

  return(
    <p>
      Tekstas
    </p>
  )
};
