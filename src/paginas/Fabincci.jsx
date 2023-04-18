import React from "react";

const Fabincci = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/FONDO3.png')] bg-cover bg-center bg-no-repeat h-[80vh] w-fabincci-width flex "
    >
      <a> FABINCCI</a>
      <div className="p-56"> ESPACIO </div>
      <div className="p-12"> MAS ESPACIO </div>
    </div>
  );
};

export default React.forwardRef(Fabincci);
