import { Fragment } from "react";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import RestDetails from "./views/RestDetails";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="restaurant/:name" element={<RestDetails />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
