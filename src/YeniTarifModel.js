import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function YeniTarifModal({ showModal, handleClose, handleSave }) {
  const [tarifAdi, setTarifAdi] = useState('');
  const [tarifResmi, setTarifResmi] = useState('');
  const [malzemeler, setMalzemeler] = useState('');
  const [yapilis, setYapilis] = useState('');
  const [ekleyen, setEkleyen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const yeniTarif = {
      baslik: tarifAdi,
      resimUrl: tarifResmi,
      malzemeler,
      yapilis,
      ekleyen,
      favoriSayisi: 0,
      favori: false,
      id: Math.random(),
    };

    handleSave(yeniTarif);

    // inputları sıfırla
    setTarifAdi('');
    setTarifResmi('');
    setMalzemeler('');
    setYapilis('');
    setEkleyen('');
  };

  

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Tarif Ekle</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="tarifAdi">
            <Form.Label >Tarif Adı</Form.Label>
            <Form.Control type="text" placeholder="Tarif Adı" value={tarifAdi} onChange={(e) => setTarifAdi(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="tarifResmi">
            <Form.Label>Tarif Resmi</Form.Label>
            <Form.Control type="text" placeholder="Tarif Resim URL" value={tarifResmi} onChange={(e) => setTarifResmi(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="malzemeler">
            <Form.Label>Malzemeler</Form.Label>
            <Form.Control as="textarea" placeholder="Malzemeler" value={malzemeler} onChange={(e) => setMalzemeler(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="yapilis">
            <Form.Label>Yapılış</Form.Label>
            <Form.Control as="textarea" placeholder="Yapılış" value={yapilis} onChange={(e) => setYapilis(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="ekleyen">
            <Form.Label>Ekleyen Kişi</Form.Label>
            <Form.Control type="text" placeholder="Ekleyen Kişi" value={ekleyen} onChange={(e) => setEkleyen(e.target.value)} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="primary" style={{backgroundColor:'Chocolate', borderColor:'white'}}type="submit">
            Kaydet
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default YeniTarifModal;
