import logo from './logo.svg';
import './App.css';
// import Komp6, { Komp5 } from './Komponentai/Komp6'
// import Paslaugos from './Paslaugos/Paslaugos';
// import Svetaine from './Uzduotis03/Svetaine'
// import Studentai from './Uzduotis04/Studentai';
// import Kintamieji from './Uzduotis05/Kintamieji';
// import Masyvas from './Uzduotis06/Masyvas';
// import Skaiciai from './Uzduotis07/Skaiciai'
// import Prekes from './Uzduotis08/Prekes';
import Child from './Uzduotis09/Child';

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
       */}
       <Child/>

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
