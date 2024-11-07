import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function UserLayout(props) {
  return (
    <div>
      <Header />

      {props?.children}

      <Footer />
    </div>
  );
}
export default UserLayout;
