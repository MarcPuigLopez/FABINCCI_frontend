import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main className="bg-[url('assets/images/FONDO1.jpg')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="md:w-1/3 lg:w-1/4 p-16 pb-8 bg-white rounded-lg mb-16">
            <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
              Oops!  <br />
              <span className="text-slate-700">
              You seem to be lost.
              </span>
            </h1>

            <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white text-center font-sarif">
              <Link to="/" className="m-3 p-2 hover:text-sky-600 transition-all rounded-lg">Home</Link>
              <Link to="/login" className="m-3 p-2 hover:text-sky-600 transition-all rounded-lg">Login</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
