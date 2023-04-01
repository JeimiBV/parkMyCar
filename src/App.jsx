import Layout from "./components/Layout/Layout"
import ListaReserva from "./pages/ListaReserva"
//import RegistroReserva from "./pages/RegistroReserva"
import {MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { DateTimePicker } from "@material-ui/pickers"
import { useState } from "react"
import Modal from "./components/Modal"
import esLocale from "date-fns/locale/es"

function App(){
  
  return (<>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <Layout>
      <Modal titulo={"Edite la fecha o tiempo"}>
        <div className="row">
            <div className="col-6 text-center"> 
            <h5>
              Parqueo desde:
            </h5>
            <label className="bg-light rounded-3 p-2">
            <DateTimePicker/>
            </label>
            </div>
            <div className=" col-6 text-center">
            <h5>
              Parqueo hasta:
            </h5>
            <label className="bg-light rounded-3 p-2 ">
            <DateTimePicker/>
            </label>
            </div>
            <div className="row d-flex justify-content-center mt-5 ">
              <button className="btn btn-primary w-25 my-5 me-2 ">
                Aceptar
              </button>
              <button className="btn btn-primary w-25 my-5 ms-2">
                Cancelar
              </button>
            </div>

        </div>
      </Modal>
      </Layout>
      </MuiPickersUtilsProvider>


  </>)
}

export default App
