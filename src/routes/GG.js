import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";

const GG = () => {
  return (
    <div>
      <NavBar />
      <Link to='GGProps'>GGProps</Link>
      <br></br>
      <Link to='GGhooks'>GGHooks</Link>
      <Outlet />
    </div>
  );
};

export default GG;