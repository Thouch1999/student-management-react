import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { logout } from "../../Services/authService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ModalLogout.css";
const ModalLogout = ({ show, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  const handleLogout = () => {
    logout(); // clear token
    navigate("/login"); // redirect correctly
  };

  return (

          <Modal show={showModal} onHide={onClose} centered>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
  );
};

export default ModalLogout;
