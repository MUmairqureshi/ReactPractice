import React, { useState } from "react";
import "./style.css";
import UserLayout from "../../Component/UserLayout";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate, Navigate } from "react-router";

function About() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [twoNumbs, setTwoNumbs] = useState(0);
  const [numberOne, setNumberOne] = useState();
  const [numbersTwo, setNumbersTwo] = useState();
  const [showNew, setShowNew] = useState(false);
  const handleClosedNew = () => setShowNew(false);
  const handleShowNew = () => setShowNew(true);
  
  const direct = useNavigate()
  const setDirection = useNavigate();
 
  const navigatePage = () => {
    setDirection("/blogs");
  };

  const addNumbers = (event) => {
    event.preventDefault();
    setTwoNumbs(Number(num1) + Number(num2));
    direct("/services")
  };

  const handleOne = (event) => {
    const { name, value } = event.target;
    // setNum1(value)
    // setNum2(value)
    if (name == "num1") {
      setNum1(value);
    } 
    else if (name == "num2") {
      setNum2(value);
    }
  };

  const handleTwo = (event) => {
    const { name, value } = event.target;

  };

  return (
    <UserLayout>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={addNumbers}>
              <input
                type="number"            
                value={num1}
                name="num1"
                onChange={handleOne}
                required
              />
              <input
                type="number"
                value={num2}             
                name="num2"
                onChange={handleOne}
                //   onChange={handleTwo}
              />
              <button type="submit">Add Number</button>
              {/* <button onClick={addNumbers}>Add Number</button> */}
              <h3>{twoNumbs}</h3>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>{twoNumbs}</p>
              <button onClick={navigatePage}>Click On</button>
            </div>
          </div>
        </div>
      </section>

      {/* New Modal start */}

      <Button variant="primary" onClick={handleShowNew}>
        Lauch Modal New
      </Button>

      <Modal show={showNew} onHide={handleClosedNew} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className="">
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosedNew}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosedNew}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* New Modal end*/}
    </UserLayout>
  );
}
export default About;
