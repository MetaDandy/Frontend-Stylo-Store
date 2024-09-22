import { NavLink } from "react-router-dom";
import propType from "prop-types";

const Navlink = ({ to, title }) => {
  return (
    <NavLink to={`/${to}`} className="flex flex-col items-center gap-1">
      <p>{title}</p>
      <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
    </NavLink>
  );
};

Navlink.propTypes = {
  to: propType.string.isRequired,
  title: propType.string.isRequired,
};

export default Navlink;
