import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <>

  <NavBar/>
  <ItemListContainer greeting = "Venta de vinos y destilados"/>

    </>
  )
}

export default App
