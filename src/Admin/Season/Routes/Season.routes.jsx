import { Route, Routes } from "react-router-dom";
import { AddSeason, ListSeason } from "../Components";

const Season = () => {
  return (
    <Routes>
      <Route path="add" element={<AddSeason />} />
      <Route path="list" element={<ListSeason />} />
    </Routes>
  );
};

export default Season;
