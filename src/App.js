import React from "react";
import Data from "./Data";
import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/" element={<Data />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
