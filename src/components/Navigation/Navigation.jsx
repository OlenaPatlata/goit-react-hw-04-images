import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Main page</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navigation;
