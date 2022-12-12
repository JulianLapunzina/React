import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Header from './components/Header/Header';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartWidget from './components/CartWidget/CartWidget'

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail' element={<ItemDetail/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>
    </BrowserRouter>
);

}

export default App;
