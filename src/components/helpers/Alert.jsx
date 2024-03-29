const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "from-red-400 to-red-600" : "from-sky-400 to-sky-600"
      } cursor-default bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-2 max-w-2xl mx-auto`}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
