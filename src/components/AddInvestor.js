import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/AddInvestor.scss";
import SelectUSState from "react-select-us-states";
import FileBase64 from "react-file-base64";
import ConfirmationModal from "./ConfirmationModal";

const AddInvestor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [file, setFile] = useState("");

  const [errors, setErrors] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (payload, event) => {
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
        //success
        if (body.id) {
          setShowModal(true);
        } else {
          setErrors(body.join(", "));
        }
      });
    return "";
  };

  const selectImage = (files) => {
    setFile(files[0].base64);
  };
  return (
    <div className="AddInvestor-formContainer">
      <Form noValidate>
        <div className="AddInvestor-formElements">
          <h1>Get Accredited!</h1>
          <p className="AddInvestor-errors">{errors}</p>
          <Form.Group controlId="formFirstName">
            <Form.Label>Investor First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Enter first name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Investor Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter last name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              required
              placeholder="Enter date of birth"
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Investor Phone Number</Form.Label>
            <Form.Control
              type="number"
              required
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
                required
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
                required
                type="text"
                placeholder="Enter zip"
                onChange={(event) => setZipCode(event.target.value)}
              />
            </Form.Group>
          </div>
          <FileBase64 multiple={true} onDone={selectImage} />
        </div>
      </Form>
      <div className="AddInvestor-submit">
        <Button
          onClick={(event) =>
            handleSubmit(
              {
                investor: {
                  firstName,
                  lastName,
                  dateOfBirth,
                  phoneNumber,
                  streetAddress,
                  state,
                  zipCode,
                  file,
                },
              },
              event
            )
          }
          type="submit"
        >
          Submit form
        </Button>
      </div>
      <ConfirmationModal
        firstName={firstName}
        lastName={lastName}
        dateOfBirth={dateOfBirth}
        phoneNumber={phoneNumber}
        streetAddress={streetAddress}
        state={state}
        zipCode={zipCode}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default AddInvestor;
