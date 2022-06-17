import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>App</Link>{' '}
      <Link to='/profile'>Profile</Link>{' '}
      <Link to='/GG'>GG</Link>{' '}
      <Link to='/TOP'>TOP</Link>{' '}
      <Link to='/lifecycles'>Lifecycles</Link>
    </nav>
  );
};

export default NavBar;