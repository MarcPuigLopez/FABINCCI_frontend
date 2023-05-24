import React from "react";
import Calendar from "../helpers/Calendar"

const BookingTab = (props, ref) => {
  return (
    <div className="p-4 scroll-mt-32" ref={ref}>
      <h2 className="mb-4 font-Merienda text-2xl font-bold text-center">
        Booking
      </h2>

      <div className=" mx-auto pb-20 w-1/2">
        <Calendar />
      </div>
    </div>
  );
};

export default React.forwardRef(BookingTab);
