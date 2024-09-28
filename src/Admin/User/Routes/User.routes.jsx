import { Route, Routes } from "react-router-dom";
import { AddUser, ListUser } from "../Components";

const User = () => {
  return (
    <Routes>
      <Route path="add" element={<AddUser />} />
      <Route path="list" element={<ListUser />} />
    </Routes>
  );
};

export default User;
