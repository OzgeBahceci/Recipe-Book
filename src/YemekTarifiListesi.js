import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Row, Col, Card, Button, Image, Container } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './style.css';
import TarifDetayModal from './TarifDetayModal';


function YemekTarifiListesi({ yemekTarifleri, setYemekTarifleri }) {
  const [showModal, setShowModal] = useState(false);
  const [tarif, setTarif] = useState({});
  

  const handleShowModal = (t) => {
    setTarif(t);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToFavorites = (id) => {
    const updatedTarifler = yemekTarifleri.map((tarif) => {
      if (tarif.id === id) {
        return { ...tarif, favori: !tarif.favori, favoriSayisi: tarif.favori ? tarif.favoriSayisi - 1 : tarif.favoriSayisi + 1 };
      } else {
        return tarif;
      }
    });
    setYemekTarifleri(updatedTarifler);
  };

  return (
    <div className="yemek-tarifi-listesi">
        <p className="text-center fs-1 " style={{color:'Chocolate'}}> Tarifler</p>

      <Row xs={1} md={2} lg={4}>
        {yemekTarifleri.map((yemekTarifi) => (
          <Container className='cardAll'>
          <Col key={yemekTarifi.id}>
            <Card>
              <Card.Img variant="top" src={yemekTarifi.resimUrl} />
              <Card.Body>
                <Card.Title className="text-center" style={{color:'Chocolate'}}>{yemekTarifi.baslik}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" className="mx-auto d-block" style={{backgroundColor:'Chocolate', borderColor:'white'}}onClick={() => handleShowModal(yemekTarifi)}>
                  Tarifi Görüntüle
                </Button>
                {yemekTarifi.favori ?
                  <Button variant="danger" className="mx-auto d-block" onClick={() => handleAddToFavorites(yemekTarifi.id)}>
                    Favorilerimden Çıkar
                  </Button>
                  :
                  <Button variant="danger" className="mx-auto d-block" onClick={() => handleAddToFavorites(yemekTarifi.id)}>
                    Favorilerime Ekle
                  </Button>
                }
              </Card.Body>
               <Card.Footer>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Avatar name={yemekTarifi.ekleyen} size={32} round={true}  />
                    <small className="text-muted" >&nbsp;&nbsp;{` ${yemekTarifi.ekleyen }`}</small>
                  </div>
                  <div>
      
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          </Container>
        ))}
      </Row>
      <TarifDetayModal showModal={showModal} tarif={tarif} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default YemekTarifiListesi;
