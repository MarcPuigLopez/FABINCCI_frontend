import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const UserTab = (props, ref) => {
  const { auth } = useAuth();

  const [userData, setUserData] = useState({
    name: auth.nombre,
    apellidos: auth.apellidos,
    email: auth.email,
    phone: auth.telefono,
    password: "*********",
  });
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUserData({
      name: auth.nombre,
      apellidos: auth.apellidos,
      email: auth.email,
      phone: auth.telefono,
      password: "*********",
    });
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Aquí puedes realizar la lógica para guardar los cambios en la base de datos o enviar una solicitud al servidor.
    // Por simplicidad, en este ejemplo solo actualizaremos el estado del componente.
  };

  return (
    <div className="p-4 top-[11vh] scroll-mt-40" ref={ref}>
      <h2 className="ext-lg font-bold mb-4 font-Merienda text-2xl text-center">
        Información de usuario
      </h2>

      <div className=" p-10 mx-auto w-3/5 pb-20">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              disabled={!editing}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={userData.apellidos}
              onChange={handleInputChange}
              disabled={!editing}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled={!editing}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            disabled={!editing}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <div className="flex justify-between">
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              disabled={true}
              className="appearance-none border rounded w-full mr-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
            />
            {editing && (
            <Link
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full max-w-max transition"
             to="/users/reset-password"
            >
              Editar Contraseña
            </Link>
            )
            }
          </div>
        </div>

        <div className="flex justify-center">
          {!editing ? (
            <button
              className="center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition"
              onClick={handleEditClick}
            >
              Editar
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 transition"
              onClick={handleSaveClick}
            >
              Guardar
            </button>
          )}
          {editing && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition"
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(UserTab);
