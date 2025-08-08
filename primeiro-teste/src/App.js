import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';


function App() {
  const nome ="Gabi"
  return (
    <div className="App">
       <h1>MEU PRIMEIRO REACT</h1>
       <HelloWorld />
       <Frase />
       <DigaMeuNome nome="Laura"/>
       <DigaMeuNome nome="Evellyn"/>
       <DigaMeuNome nome={nome}/>
       <Pessoa
        nome="Anderson"
        idade="51"
        foto = "https://placehold.co/150"
       />
       
    </div>
  );
}

export default App;
