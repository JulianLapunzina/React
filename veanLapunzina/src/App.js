import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const stock = 5
  const books = [0,1,2,3,4,5];
  return (
    <div className="App">
      <button className='btn-login'>LOGIN</button>
      <ul className='nav'>
        <li className='nav-list'>
          <a className='nav-link' href='../public/index.html'>Home</a>
          <a className='nav-link' href='../public/index.html'>Catálogo</a>
          <a className='nav-link' href='../public/index.html'>Inscripción</a>
        </li>
      </ul>
      <NavBar/>
      <hr className='raya'></hr>
      <ItemListContainer greeting={'Hola, bienvenidx a Vean'}/>
      <header className="App-header">
        <main>
          <section>
            <ItemCount stock={stock}/>
          </section>
          <section>
            <img src={logo} className="App-logo" alt="logo"/>
            <a href="../public/index.html"></a>
          </section>
        </main>
      </header>
      </div> 
      );
}

export default App;
