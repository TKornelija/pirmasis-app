import logo from './logo.svg';
import './App.css';
import Komp6, { Komp5 } from './Komponentai/Komp6'
import Paslaugos from './Paslaugos/Paslaugos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Paslaugos/>
        <Komp4/>
        <Komp5/>
        <Komp6/>

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
