import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import Alert from "../helpers/Alert";

const UserTab = (props, ref) => {
  const { userData, setUserData, modifyUser, getUser } = useAuth();
  const [reload, setReload] = useState(true);
  const [alert, setAlert] = useState({});
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: userData.name || "loading...",
    lastName: userData.lastName || "loading...",
    email: userData.email || "loading...",
    phone: userData.phone || "loading...",
    password: "*********",
  });

  useEffect(() => {
    if (userData) {
      setData({
        name: userData.name || "loading...",
        lastName: userData.lastName || "loading...",
        email: userData.email || "loading...",
        phone: userData.phone || "",
        password: "*********",
      });
    }
  }, [userData]);

  useEffect(() => {
    if (reload) {
      setLoading(true);
      getUser();
      setReload(false);
    }
  }, [reload]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  email: userData.email;
  const handleCancelClick = () => {
    setEditing(false);
    setData({
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: "*********",
    });
  };

  const handleSaveClick = async () => {
    // Si los parametros name, lastName, email o telefono no han cambiado, no se modifica el user
    if (
      data.name === userData.name &&
      data.lastName === userData.lastName &&
      data.email === userData.email &&
      data.phone === userData.phone
    ) {
      setEditing(false);
      setAlert({
        msg: "No se han realizado cambios",
        error: false,
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }

    try {
      await modifyUser(data);
      setUserData({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: "*********",
      });

      setEditing(false);

      setAlert({
        msg: "Usuario modificado correctamente",
        error: false,
      });
    } catch (error) {
      console.log(error);
      setAlert({
        msg: "Error al modificar el usuario",
        error: true,
      });
    }

    setTimeout(() => {
      setAlert({});
      setReload(true);
    }, 2000);
  };

  const { msg } = alert;

  return (
    <div className="p-4 top-[11vh] scroll-mt-40" ref={ref}>
      <h2 className="font-bold mb-4 font-Roboto text-2xl text-center">
        Información de usuario
      </h2>

      {msg && <Alert alert={alert} />}

      <div className=" lg:p-10 mx-auto lg:w-3/5 md:w-1/2 w-full pb-20">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              disabled={!editing}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Apellidos
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={data.lastName}
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
            value={data.email}
            onChange={handleInputChange}
            disabled={!editing}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Telefono
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={data.phone}
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
              value={data.password}
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
            )}
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
