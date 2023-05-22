import React from 'react';
import Calendar from 'react-calendar';

const BookingTab = (props, ref) => {
  return (
    <div className="p-4" ref={ref}>
      <h2 className="text-lg font-bold mb-4 h-128">Booking</h2>
      <Calendar />
      {/* Aquí va el componente que permite reservar hora */}
    </div>
  );
};

export default React.forwardRef(BookingTab);
