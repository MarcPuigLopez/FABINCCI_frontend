import React from 'react';

const UserTab = (props, ref) => {
  return (
    <div className="p-4 top-[11vh] scroll-mt-40" ref={ref}>
      <h2 className="ext-lg font-bold mb-4 h-128">User information</h2>
      {/* Aquí va el formulario para modificar datos de usuario */}
      HOLAAAAAAAAAAAAAAA
    </div>
  );
};

export default React.forwardRef(UserTab);
