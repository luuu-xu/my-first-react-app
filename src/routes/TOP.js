import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const TOP = () => {
  return (
    <div>
      <NavBar />
      <Link to='TOPHooks'>TOPHooks</Link>
      <br></br>
      <Link to='TOPuseEffect'>TOPuseEffect</Link>
      <Outlet/>
    </div>
  );
};

export default TOP;