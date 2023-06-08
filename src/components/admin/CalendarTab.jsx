import React from "react";

import AdminCalendar from "../helpers/AdminCalendar";

const CalendarTab = (props, ref) => {
  return (
    <div className="font-Roboto p-4 scroll-mt-32" ref={ref}>
      <h2 className="text-2xl font-bold text-center ">Calendario</h2>

      <div className="xl:flex pb-10 justify-center mt-5">
        <div className="w-full">
          <AdminCalendar />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(CalendarTab);
