import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="md:w-2/3 lg:w-2/5 w-4/5 xl:p-16 p-10 bg-white rounded-lg">
            <h1 className="text-sky-600 font-black xl:text-6xl md:text-5xl text-4xl xl:mb-5 text-center">
              ¡Oops!  ¡Error 404!<br />
              <span className="text-slate-700 xl:text-5xl md:text-4xl text-3xl">
              Parece que te has perdido
              </span>
            </h1>

            <div className="xl:mt-20 md:mt-10 mt-5 shadow-lg px-5 py-10 rounded-xl bg-white text-center font-sarif">
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
