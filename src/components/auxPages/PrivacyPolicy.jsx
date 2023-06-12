import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/images/LogoBlanco.png";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-center bg-fixed">
      <div className="container mx-auto py-20">
        <div className="flex">
          <Link to="/" className="flex text-white text-2xl items-center">
            <FaArrowLeft className="my-auto text-xl mr-4 ml-8" />
            Volver al inicio
          </Link>
        </div>
        <div className="flex justify-center -mt-10">
          <img src={logo} alt="Fabincci Logo" className="w-36 h-20" />
        </div>

        <div className="text-white px-20 mt-28">
          <h1 className="text-6xl text-white font-bold mt-20 mb-10">
            Política de privacidad
          </h1>
          <p className="text-lg mb-6 px-2">
            La confidencialidad y la seguridad son valores primordiales para
            <b> FABINCCI BARBER SHOP</b> y, en consecuencia, asumimos el
            compromiso de garantizar la privacidad del Usuario en todo momento y
            de no recopilar información innecesaria. A continuación, le
            proporcionamos toda la información necesaria sobre nuestra Política
            de Privacidad en relación con los Datos Personales que recopilamos
            de usted, explicándole:
          </p>
          <ul className="list-disc text-lg mb-6 px-2 ml-16">
            <li className="mb-2">
              Quién es el responsable del tratamiento de sus datos.
            </li>
            <li className="mb-2">
              Para qué fines recopilamos los datos que le solicitamos.
            </li>
            <li className="mb-2">
              Cuál es la legitimación para su tratamiento.
            </li>
            <li className="mb-2">Durante cuánto tiempo los conservamos.</li>
            <li className="mb-2">
              A qué destinatarios se comunican sus datos.
            </li>
            <li className="mb-2">Cuáles son sus derechos y cómo ejercerlos.</li>
          </ul>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            RESPONSABLE DEL TRATAMIENTO
          </h2>
          <p className="text-lg mb-6 px-2">
            <b>FABINCCI BARBER SHOP</b>, con NIF 08302, es el responsable del
            tratamiento de los datos personales recopilados a través de nuestro
            sitio web.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            DATOS PERSONALES
          </h2>
          <p className="text-lg mb-6 px-2">
            Esta política de privacidad cubre todos los datos personales
            recopilados y utilizados por el sitio web de FABINCCI BARBER SHOP.
            Al proporcionar sus datos personales, usted garantiza que son
            verdaderos, exactos y se compromete a notificar cualquier cambio o
            modificación en los mismos. Cualquier pérdida o daño causado por
            proporcionar información incorrecta, inexacta o incompleta en los
            formularios de registro será responsabilidad exclusiva del usuario.
            Podemos recopilar sus datos personales directamente cuando usted nos
            los proporciona (por ejemplo, al contactarnos) o indirectamente a
            través del uso de cookies y otras tecnologías de seguimiento.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            FINALIDADES, LEGITIMACIÓN Y CONSERVACIÓN DE LOS DATOS
          </h2>
          <p className="text-lg mb-6 px-2">
            Recopilamos sus datos personales con las siguientes finalidades:
          </p>
          <ul className="list-disc text-lg mb-6 px-2 ml-16">
            <li className="mb-2">
              Facilitarle un medio para que pueda contactarnos y responder a sus
              solicitudes de información.
            </li>
            <li className="mb-2">
              Enviarle comunicaciones sobre nuestros productos, servicios y
              actividades, si así lo ha aceptado.
            </li>
            <li className="mb-2">
              Atender y responder a sus consultas, peticiones y dudas.
            </li>
            <li className="mb-2">
              Evaluar y considerar su currículum vitae para posibles procesos de
              selección presentes y futuros.
            </li>
          </ul>
          <p>
            La legitimación para el tratamiento de sus datos se basa en su
            consentimiento al proporcionarnos la información o al marcar la
            casilla de aceptación correspondiente. Conservaremos sus datos
            personales durante el tiempo necesario para cumplir con las
            finalidades mencionadas y de acuerdo con la legislación aplicable.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            DESTINATARIOS DE SUS DATOS
          </h2>
          <p className="text-lg mb-6 px-2">
            Podemos comunicar sus datos personales a terceros que nos ayudan en
            la gestión de leads, proveedores de servicios de TI, servicios de
            alojamiento, mantenimiento y soporte de bases de datos, así como a
            aquellos que puedan contener información sobre usted. Nos
            aseguraremos de que cualquier comunicación de sus datos personales
            cumpla con la legislación aplicable.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            SUS DERECHOS
          </h2>
          <p className="text-lg mb-6 px-2">Usted tiene derecho a:</p>
          <ul className="list-disc text-lg mb-6 px-2 ml-16">
            <li className="mb-2">
              Acceder a sus datos personales o solicitar su rectificación si son
              inexactos.
            </li>
            <li className="mb-2">
              Solicitar la supresión de sus datos personales cuando ya no sean
              necesarios para los fines para los que fueron recopilados.
            </li>
            <li className="mb-2">
              Oponerse al tratamiento de sus datos por motivos relacionados con
              su situación particular.
            </li>
            <li className="mb-2">
              Solicitar la portabilidad de sus datos en los casos previstos por
              la ley.
            </li>
            <li className="mb-2">
              Ejercer otros derechos reconocidos por la legislación aplicable.
            </li>
          </ul>
          <p>
            Puede ejercer estos derechos enviando una solicitud por escrito a la
            dirección 08302 o al correo electrónico fabincci@gmail.com. Además,
            tiene derecho a presentar una reclamación ante la autoridad de
            protección de datos correspondiente si considera que sus derechos no
            han sido respetados.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            SEGURIDAD DE SUS DATOS PERSONALES
          </h2>
          <p className="text-lg mb-6 px-2">
            Hemos implementado las medidas técnicas y organizativas necesarias
            para garantizar la seguridad de sus datos personales y evitar su
            alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            ACTUALIZACIÓN DE SUS DATOS
          </h2>
          <p className="text-lg mb-6 px-2">
            Es importante que nos mantenga informados de cualquier cambio o
            modificación en sus datos personales para garantizar su exactitud.
            No nos hacemos responsables de la veracidad de los datos
            proporcionados si no se nos informa de dichos cambios.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            CONTACTO
          </h2>
          <p className="text-lg mb-6 px-2">
            Si tiene alguna pregunta o inquietud sobre nuestra Política de
            Privacidad o desea ejercer sus derechos, puede ponerse en contacto
            con nosotros a través de fabincci@gmail.com.
          </p>

          <h2 className="text-2xl text-white font-bold mt-20 mb-10">
            CAMBIOS EN LA POLÍTICA DE PRIVACIDAD
          </h2>
          <p className="text-lg mb-6 px-2">
            Nos reservamos el derecho de actualizar o modificar esta Política de
            Privacidad en cualquier momento para adaptarla a cambios en nuestro
            sitio web o en la legislación aplicable. Le recomendamos que
            consulte esta política periódicamente para estar al tanto de
            cualquier cambio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
