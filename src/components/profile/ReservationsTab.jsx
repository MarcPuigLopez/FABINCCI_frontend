import React, { useState } from "react";

import CalendarShowReservations from "../helpers/CalendarShowReservations";
import ActiveReservations from "../helpers/ActiveReservations";

const ReservationsTab = (props, ref) => {

  return (
    <div className="font-Roboto sm:p-4 p-1 scroll-mt-32" ref={ref}>
      <h2 className="text-2xl font-bold mb-4 text-center ">Gestión de Citas</h2>

      <div className="xl:flex pb-20 justify-center mt-10">
        <div className="sm:mr-5 xl:w-1/2">
          <h3 className="text-2xl font-bold mb-16 text-center">
            Reservas Activas
          </h3>

          <ActiveReservations />
        </div>
        <div className="lg:p-0 lg:mt-0 mt-10 pt-10 mx-auto lg:w-3/5 md:w-1/2 w-full pb-20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Localiza tu cita
          </h3>
          <CalendarShowReservations />
          <p className="text-center sm:mt-4 mt-10">
            {" "}
            Situa el ratón encima del dia para ver información sobre tu cita.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ReservationsTab);
