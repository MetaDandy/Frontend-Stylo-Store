import { Route, Routes } from "react-router-dom";
import { AddBranch, ListBranch } from "../Components";

const Branch = () => {
  return (
    <Routes>
      <Route path="add" element={<AddBranch />} />
      <Route path="list" element={<ListBranch />} />
    </Routes>
  );
};

export default Branch;
