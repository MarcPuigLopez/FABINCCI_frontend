import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
