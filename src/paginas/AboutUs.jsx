import React from "react";

const AboutUs = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/FONDO2.png')] bg-cover bg-center bg-no-repeat h-[80vh] w-aboutUs-width flex "
    >
      <a> ABOUT US</a>
      <div className="p-56"> ESPACIO </div>
      <div className="p-12"> MAS ESPACIO </div>
    </div>
  );
};

export default React.forwardRef(AboutUs);
