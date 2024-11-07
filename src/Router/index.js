import React from "react";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";
import Blogs from "../Screens/Blogs"
import ProtectedRoutes from "./ProtectedRoutes";
import About from "../Screens/About";
import Help from "../Screens/Help";
import Services from "../Screens/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Router() {
  return (
    <div>
      <BrowserRouter basename="Tim-Test">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="help" Component={Help} />
          <Route
            path="protected-routes"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;
