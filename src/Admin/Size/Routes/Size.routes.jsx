import { Route, Routes } from "react-router-dom";
import { AddSize, ListSize } from "../Components";

const Size = () => {
  return (
    <Routes>
      <Route path="add" element={<AddSize />} />
      <Route path="list" element={<ListSize />} />
    </Routes>
  );
};

export default Size;
