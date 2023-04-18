import { Link } from "react-router-dom";

const Footer = () => {
  return <div className=" h-16 bg-black text-white ">
    
    <nav className="lg:flex lg:justify-center">
        <Link
          className="block text-center m-5 text-white uppercase text-lg"
          to="/login"
        >
          ¿Tienes una cuenta? Haz login
        </Link>

        <Link
          className="block text-center m-5 text-white uppercase text-lg"
          to="/register"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>

    </div>;
};

export default Footer;
