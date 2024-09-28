import { NavLink } from "react-router-dom";

const SideBarItem = ({ assets, path, title }) => {
  return (
    <li>
      <NavLink
        to={path}
        className="flex items-center gap-3 px-3 py-2 rounded-l hover:bg-gray-700 rounded"
      >
        <img src={assets} className="w-5 h-5 hidden md:block" alt="" />
        <p className="block">{title}</p>
      </NavLink>
    </li>
  );
};

export default SideBarItem;
