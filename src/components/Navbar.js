import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav className="navbar">
        <ul>
          <li key="home">
            <NavLink to="/">Home</NavLink>
          </li>
          <span className="division">|</span>
          <li key="calc">
            <NavLink to="calc">Calculator</NavLink>
          </li>
          <span className="division">|</span>
          <li key="quote">
            <NavLink to="quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navbar;
