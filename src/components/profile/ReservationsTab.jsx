import React from 'react';
import Calendar from 'react-calendar';

const ReservationsTab = (props, ref) => {
  return (
    <div className="p-4 scroll-mt-32" ref={ref}>
      <h2 className="text-lg font-bold mb-4 h-128" >Reservations</h2>
      <Calendar />
      {/* Aquí va el componente que muestra las reservas del usuario */}
    </div>
  );
};

export default React.forwardRef(ReservationsTab);
