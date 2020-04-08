import React, { useState, useCallback } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "../styles/AddInvestor.scss";

const ConfirmationModal = ({
  firstName,
  lastName,
  dateOfBirth,
  phoneNumber,
  streetAddress,
  state,
  zipCode,
  showModal,
  setShowModal
}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Thanks!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Great job, you added an entry!</p>
        <p>Here are your details:</p>
        <p>First: {firstName}</p>
        <p>Last: {lastName}</p>
        <p>DOB: {dateOfBirth}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Address: {streetAddress}</p>
        <p>State: {state}</p>
        <p>Zip: {zipCode}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
