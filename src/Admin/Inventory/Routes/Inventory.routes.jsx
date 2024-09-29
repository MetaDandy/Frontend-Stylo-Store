import { Route, Routes } from "react-router-dom";
import { AddInventory, ListInventory } from "../Components";

const Inventory = () => {
  return (
    <Routes>
      <Route path="add" element={<AddInventory />} />
      <Route path="list" element={<ListInventory />} />
    </Routes>
  );
};

export default Inventory;
