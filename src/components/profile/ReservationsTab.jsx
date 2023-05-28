import React from "react";
import Calendar from "../helpers/Calendar";

const ReservationsTab = (props, ref) => {
  return (
    <div className="p-4 scroll-mt-32" ref={ref}>
      <h2 className="font-Merienda text-2xl font-bold mb-4 text-center">
        Gestión de Citas
      </h2>

      <div className="flex pb-20 justify-center mt-10">
        <div className="ml-10 w-1/2">
          <h3 className="font-Merienda text-2xl font-bold mb-4 text-center">
            Reservas Activas
          </h3>
          <div className="flex flex-col p-10">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <p className="font-Merienda text-2xl font-bold mb-4 text-center">
                  1
                </p>
                <p className="font-Merienda text-2xl font-bold mb-4 text-center">
                  2
                </p>
                <p className="font-Merienda text-2xl font-bold mb-4 text-center">
                  3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mr-5">
          <h3 className="font-Merienda text-2xl font-bold mb-4 text-center">
            Localiza tu cita
          </h3>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ReservationsTab);
