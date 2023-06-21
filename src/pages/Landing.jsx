import { useState } from "react";
import "../styles/Land.css";

import React from "react";
import {
  fetchGetScheduleToday,
  fetchGetSchedules,
} from "../functions/fetchSchedules";
import { useEffect } from "react";

const Landing = () => {
  const [schedules, setSchedules] = useState([]);
  const [todaySchedule, setTodaySchedule] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const getTodaySchedule = async () => {
    const todaySchedule = await fetchGetScheduleToday();
    setTodaySchedule(todaySchedule);
  };

  const getSchedules = async () => {
    const schedules = await fetchGetSchedules();
    setSchedules(schedules);
  };

  const handleSelectSchedule = (value) => {
    setSelectedSchedule(value);
    setTodaySchedule(null);
    console.log("herss");
  };

  useEffect(() => {
    getTodaySchedule();
    getSchedules();
  }, []);

  return (
    <div className="prueba bg-dark bg-opacity-75">
      <div id="parallax-world-of-ugg">
        <section className=" ">
          <article className="position-absolute start-0 end-0 w-50 mx-auto indicador text-center">
            <div
              style={{
                textAlign: "center",
                color: "#C3CEDA",
                fontSize: "25px",
              }}
            >
              {todaySchedule ? (
                `Horario de Atención hoy ${todaySchedule.startDate.substring(
                  11,
                  13
                )}: ${todaySchedule.startDate.substring(
                  14,
                  16
                )} Hasta ${todaySchedule.endDate.substring(
                  11,
                  13
                )}: ${todaySchedule.endDate.substring(14, 16)} Tarifa: ${
                  todaySchedule.price
                } `
              ) : (
                <h4 className="">{selectedSchedule}</h4>
              )}
            </div>
            <select
              className="col-8 w-50 drop p-1 border-none "
              id="guardia"
              name="guardia"
              onChange={(e) => handleSelectSchedule(e.target.value)}
            >
              <option value="">Ver Horarios Disponibles</option>
              {schedules.map((schedule) => (
                <option
                  className="p-3"
                  key={schedule.id}
                  value={`Horario de Atención De Fecha ${schedule.startDate.substring(
                    0,
                    10
                  )} De ${schedule.startDate.substring(
                    11,
                    13
                  )}: ${schedule.startDate.substring(
                    14,
                    16
                  )} Hasta ${schedule.endDate.substring(
                    11,
                    13
                  )}: ${schedule.endDate.substring(14, 16)} Tarifa: ${
                    schedule.price
                  } `}
                >
                  {schedule.startDate.substring(0, 10)}{" "}
                  {schedule.startDate.substring(11, 16)} Hasta{" "}
                  {schedule.endDate.substring(0, 10)}{" "}
                  {schedule.endDate.substring(11, 16)} precio = {schedule.price}
                </option>
              ))}
            </select>
          </article>
          <div class="parallax-one position-relative ">
            <h2 className="bg-dark bg-opacity-75 py-2">PARK MY CAR</h2>
          </div>
        </section>

        <section className="blok">
          <div class="block">
            <p class="margin-top-10">
              ¿Estás cansado de llegar al parqueo y no encontrar un lugar
              disponible? ¡No te preocupes más! Con nuestra página web de
              reserva de sitios de estacionamiento, podrás asegurarte un lugar
              antes de salir de casa. Ahora puedes reservar tu espacio de manera
              fácil y rápida desde la comodidad de tu hogar u oficina, evitando
              la pérdida de tiempo y estrés innecesario. En nuestra plataforma,
              ofrecemos diferentes opciones de ubicación y tarifas, para que
              puedas elegir la que mejor se adapte a tus necesidades. ¡Haz tu
              reserva hoy mismo y asegura tu espacio de estacionamiento sin
              preocupaciones!
            </p>
            <p class="line-break margin-top-10"></p>
            <p>
              ParkMyCar es un sistema de administracion de parqueos, dedicado al
              manejo de sitios, alquiler de espacios y cuidado de autos en
              general, donde se busca la confiabilidad y seguridad a la hora de
              solicitar un espacio en un lapso de tiempo definido.
            </p>
            <p class="margin-top-10">
              Estara pensado tanto para usuarios en general, que podran acceder
              al parqueo que deseen, como asi tambien para los administradores
              de parqueos en general, donde estos podran acceder al sistema y
              todas sus funcionalidades, como ser registros de reservas, lapsos
              de tiempo reservados y una gama de precios en general.
            </p>
          </div>
        </section>

        <section>
          <div class="parallax-two">
            <h2 className="bg-dark bg-opacity-75 py-2">¿Cómo funciona?</h2>
          </div>
        </section>

        <section className="blok">
          <div class="block">
            <p>
              <span class="first-character ny">P</span>arkMyCar funciona atraves
              de la reserva de espacios para vehiculos o motocicletas, donde
              podras elegir el tiempo que requieras para tu motorizado, mientras
              el parqueo como tal este abierto, teniendo la certeza de que
              estara seguro y en buenas manos.
            </p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">
              Podras observar en todo momento las plazas disponibles del
              parqueo, podras ver en tiempo real si estan disponibles. Asi como
              tambien podras gestionar tus reservas, teniendo un registro de las
              reservas actuales que tengas, podras pagar por medio de QR por el
              servicio, al terminar tu tiempo de reserva.
            </p>
            <p class="margin-top-10">
              Tambien tendras acceso a los distintos parqueos disponibles en
              nuestro sistema, donde tambien se tendra acceso a reservar en el
              horario especifico que desees, pudiendo asi tener la seguridad de
              tu espacio en avance y con certeza de que estara disponible cuando
              lo necesites.
            </p>
          </div>
        </section>

        <section>
          <div class="parallax-three">
            <h2 className="bg-dark bg-opacity-75 py-2">¿Quiénes somos?</h2>
          </div>
        </section>

        <section className="blok">
          <div class="block">
            <p>
              <span class="first-character ny">E</span>sta página fue realizada
              por CleanCode SRL,empresa de software conformada por 7 miembros,
              especializados en el desarrollo de software.
            </p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">
              Somos un equipo apasionado por la tecnología y comprometidos con
              la creación de soluciones innovadoras. Nuestra empresa ha estado
              en el negocio de desarrollo de software confiable. Con nuestro
              enfoque centrado en el usuario, hemos trabajado arduamente para
              ofrecer una plataforma fácil de usar y confiable para la reserva
              de sitios de estacionamiento. Además, nuestro equipo de
              desarrolladores altamente capacitados y con amplia experiencia, se
              buscara siempre brindar la mejor experiencia posible a nuestros
              clientes. Estamos comprometidos con ofrecer un servicio de calidad
              y satisfacción a nuestros usuarios. Para contactos de servicio,
              enviar un mensaje a clean.code@gmail.com
            </p>
          </div>
        </section>
      </div>
      <footer className="d-flex align-items-center justify-content-center">
        <p className="mb-0 ">&copy; 2023 ParkMyCar. All rights reserved.</p>
        <a
          class="fa-brands fa-github ms-2 text-decoration-none text-light fs-4"
          target="_blank"
          href="https://github.com/JeimiBV/parkmycar/tree/reparandoDetalles"
        ></a>
      </footer>
    </div>
  );
};
export default Landing;
