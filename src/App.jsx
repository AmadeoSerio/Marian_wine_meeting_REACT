import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Venta de vinos y destilados" />} />
          <Route path='/varietal/:varietalCategoria' element={<ItemListContainer greeting="Venta de vinos y destilados" />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
