import { Route, Routes } from "react-router-dom";
import { AddRole, ListRole } from "../Componentes";

const Role = () => {
  return (
    <Routes>
      <Route path="add" element={<AddRole />} />
      <Route path="list" element={<ListRole />} />
    </Routes>
  );
};

export default Role;
