import Layout from "./components/Layout/Layout"
import ListaReserva from "./pages/ListaReserva"
//import RegistroReserva from "./pages/RegistroReserva"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>   
  )
}

export default App
