import Layout from "./components/Layout"
import Gestionar from "./pages/Gestionar"
import Landing from "./pages/Landing"

function App(){
  return (<>
        <Layout>
        {
          <Landing/>
        }
        </Layout>

  </>)
}

export default App
