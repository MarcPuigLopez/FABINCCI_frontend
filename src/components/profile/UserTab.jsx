import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import Alerta from "../helpers/Alerta";

const UserTab = (props, ref) => {
  const { userData, setUserData, modifyUser, getUser } = useAuth();
  const [reload, setReload] = useState(true);
  const [alerta, setAlerta] = useState({});
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    nombre: userData.nombre || "loading...",
    apellidos: userData.apellidos || "loading...",
    email: userData.email || "loading...",
    telefono: userData.telefono || "",
    password: "*********",
  });

  useEffect(() => {
    if (userData) {
      setData({
        nombre: userData.nombre || "loading...",
        apellidos: userData.apellidos || "loading...",
        email: userData.email || "loading...",
        telefono: userData.telefono || "",
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

  const handleCancelClick = () => {
    setEditing(false);
    setData({
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      password: "*********",
    });
  };

  const handleSaveClick = async () => {
    // Si los parametros nombre, apellidos, email o telefono no han cambiado, no se modifica el usuario
    if (
      data.nombre === userData.nombre &&
      data.apellidos === userData.apellidos &&
      data.email === userData.email &&
      data.telefono === userData.telefono
    ) {
      setEditing(false);
      setAlerta({
        msg: "No se han realizado cambios",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    
    try {
      await modifyUser(data);
      console.log(userData);
      setUserData({
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        telefono: data.telefono,
        password: "*********",
      });

      setEditing(false);
      
      setAlerta({
        msg: "Usuario modificado correctamente",
        error: false,
      });
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: "Error al modificar el usuario",
        error: true,
      });
    }

    setTimeout(() => {
      setAlerta({});
      setReload(true);
    }, 2000);
  };

  const { msg } = alerta;

  return (
    <div className="p-4 top-[11vh] scroll-mt-40" ref={ref}>
      <h2 className="ext-lg font-bold mb-4 font-Roboto text-2xl text-center">
        Información de usuario
      </h2>

      {msg && <Alerta alerta={alerta} />}

      <div className=" p-10 mx-auto lg:w-3/5 pb-20">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={data.nombre}
              onChange={handleInputChange}
              disabled={!editing}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="apellidos"
          >
            Apellidos
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={data.apellidos}
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
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="telefono"
          >
            telefono
          </label>
          <input
            type="telefono"
            id="telefono"
            name="telefono"
            value={data.telefono}
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
