import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

function TarifDetayModal({ tarif, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title  style={{ color: "Chocolate" }}>{tarif.baslik}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center mb-3">
          <Image src={tarif.resimUrl} alt={tarif.baslik} fluid />
        </div>
        <p className="mb-3"  style={{ color: "Chocolate" }}><b>Ekleyen:</b> {tarif.ekleyen}</p>
        <p className="mb-3"  style={{ color: "Chocolate" }}><b>Malzemeler:</b> {tarif.malzemeler}</p>
        <p className="mb-3"  style={{ color: "Chocolate" }}><b>Yapılışı:</b> {tarif.yapilis}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" style={{backgroundColor:'Chocolate', borderColor:'white'}} onClick={handleClose}>
          Kapat
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TarifDetayModal;
