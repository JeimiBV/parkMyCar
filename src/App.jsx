import Layout from "./components/Layout"
import Gestionar from "./pages/Gestionar"

function App(){
  return (<>
        <Layout>
        {
          <Gestionar/>
        }
        </Layout>

  </>)
}

export default App
