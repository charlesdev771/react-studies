import './App.css';
import HelloWorld from './components/HelloWorld';
import SayName from './components/SayName';
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';
function App() {

  const img = 'https://via.placeholder.com/150';
  const name = 'Charles';
  const pName = 'JOOJ';
  const nName = name.toUpperCase();
  return (
    <div className="App">
      <h1>Hello, {nName}</h1>
      <img src={img} alt='IMG' />
      <HelloWorld />
      <SayName nome='Charles'/>
      <SayName nome={pName}/>
      <List />
      <Evento numero="1"/>
      <Form />
    </div>
  );
}

export default App;
