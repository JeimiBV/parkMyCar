import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SelectMulti } from "../components/MultiSelect";
import "../styles/PagesStyles/CrearNotificacion.css";
import {toast} from "react-toastify";

const CrearNotificacion = () => {
  const [reserves, setReserves] = useState([]);
  const [phonesValues, setPhonesValues] = useState([]);

  useEffect(() => {
    getReserves();
  }, []);
  
  const getReserves = async () => {
    await fetch("https://localhost:44307/Reserves")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setReserves(data);
    });
  }

  const methods = useForm();

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors, isValid },
  } = methods;

  const optionsMapped = reserves.map((reserve) => ({
    value: reserve.phone,
    label: `${reserve.phone} - ${reserve.plate}`,
  }));

  const handleSelectValues = (opts) => {
    setPhonesValues(opts);
    setValue("phones", [ ...opts.map((opt) => opt.value.toString()) ]);
  };

  const onSubmit = async (data) => {
    await fetch("https://localhost:44307/Notification",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then((data) => {
      console.log(data);
      toast.success('notificaciones enviadas con exito', { theme: "colored", autoClose: 3000});
      setPhonesValues([]);
      reset();
    })
    .catch((error) => {
      toast.error('error al enviar las notificaciones', { theme: "colored", autoClose: 3000});
      console.error(error);
    });
  };

  return (
    <div className="contenedorNot">
      <div className="tituloNoti">Crear Notificación</div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="tituloPara">Para: </h3>
          <div className="contSelect">
            <SelectMulti
              name="phones"
              options={[
                { label: "Seleccionar todo", value: "all" },
                ...optionsMapped,
              ]}
              values={phonesValues}
              handleSelect={handleSelectValues}
              rules={{ required: "En necesario seleccionar un numero " }}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.phones?.message}
            </span>
          </div>

          <h3 className="tituloDes">Descripcion: </h3>
          <div className="contDes">
            <textarea
              name="message"
              className="form-control Descripcion"
              placeholder="Escriba el mensaje"
              {...register("message", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },

                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: "El formato no es  el correcto",
                },

                minLength: {
                  value: 15,
                  message: "Escriba por lo menos 15 caracteres",
                },

                maxLength: {
                  value: 150,
                  message: "Solo puede escribir 150 caracteres",
                },
              })}
            />

            <span className="text-danger text-small d-block mb-2">
              {errors?.message?.message}
            </span>
          </div>
          <div className="m-2">
            <button
              type="button"
              disabled={!isValid}
              className="btn btn-primary botonDes"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Enviar
            </button>
          </div>
        </form>
      </FormProvider>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5 "
                id="staticBackdropLabel"
                style={{ color: "black" }}
              >
                Enviar Mensaje
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">¿Estas seguro de enviar el mensaje?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Si, aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearNotificacion;
