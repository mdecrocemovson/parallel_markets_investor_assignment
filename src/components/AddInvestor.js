import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/AddInvestor.scss";
import SelectUSState from "react-select-us-states";

const AddInvestor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validated, setValidated] = useState(false);
  console.log(firstName);

  const handleSubmit = (payload) => {
    fetch("http://localhost:5000/api/v1/investors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
        return response.json();
    })
    .then((body) => {
        debugger;
    })
    return "";
  };
  return (
    <div className="AddInvestor-formContainer">
      <div className="AddInvestor-formElements">
        <Form>
          <h1>Get Accredited!</h1>
          <Form.Group controlId="formFirstName">
            <Form.Label>Investor First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Investor Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of birth"
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Investor Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </Form.Group>
          <div className="AddInvestor-location">
            <Form.Group
              className="AddInvestor-locationInput"
              controlId="formStreetAddress"
            >
              <Form.Label>Investor Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Street Address"
                onChange={(event) => setStreetAddress(event.target.value)}
              />
            </Form.Group>
            <div className="AddInvestor-statesContainer">
              <Form.Group
                className="AddInvestor-locationInput"
                controlId="formStreetAddress"
              >
                <Form.Label>Us States</Form.Label>
                <SelectUSState
                  className="AddInvestor-states"
                  onChange={(value) => setState(value)}
                />
              </Form.Group>
            </div>
            <Form.Group
              className="AddInvestor-locationInput"
              controlId="formZip"
            >
              <Form.Label>Investor Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip"
                onChange={(event) => setZipCode(event.target.value)}
              />
            </Form.Group>
          </div>
        </Form>
        <button
          onClick={() =>
            handleSubmit({
              investor: {
                firstName,
                lastName,
                dateOfBirth,
                phoneNumber,
                streetAddress,
                state,
                zipCode,
              },
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddInvestor;
