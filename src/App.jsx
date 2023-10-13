import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/NavBar/Navbar.jsx'

function App() {


  return (
    <>

  <Navbar/>
  <ItemListContainer greeting = "Venta de vinos y destilados"/>

    </>
  )
}

export default App
