
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <NavBar/>
      <hr className='raya'></hr>
      <Header/>
      <section className='bookSection'>
        <ItemListContainer/>
      </section>
    </>
);

}

export default App;
