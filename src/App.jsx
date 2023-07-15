import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import Categorias from './Components/Categorias/Categorias'
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <br />
      <header className="container-fluid">
        <NavBar />
      </header>
      <main>
        <Categorias />
        <ItemListContainer greeting='Luis'/>
      </main>
      <footer></footer>
    </div>

  );
}

export default App;
