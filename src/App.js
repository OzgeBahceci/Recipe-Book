import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import YemekTarifiListesi from "./YemekTarifiListesi";

import "./style.css";
import YeniTarifModal from "./YeniTarifModel";
import TarifDetayModal from "./TarifDetayModal";


function App() {
  const [yemekTarifleri, setYemekTarifleri] = useState([
    {
      id: 1,
      baslik: "Ispanaklı Börek",
      malzemeler: "Ispanak, peynir, yufka",
      yapilis:
        "Ispanakları doğrayın, peynirle karıştırın, yufkaları katlayın ve börekleri yapın",
      ekleyen: "Selin",
      resimUrl:
        "https://gezginbirchef.com/wp-content/uploads/2019/11/ispanakli-borek-tarifi.jpg",
    },
    {
      id: 2,
      baslik: "Fırında Tavuk",
      malzemeler: "Tavuk, patates, soğan, biber",
      yapilis: "Tavukları ve sebzeleri doğrayın, fırında pişirin",
      ekleyen: "Tuğba",
      resimUrl:
        "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/11/firinda-tavuk-but-resimli-yemek-tarifi(16).jpg",
    },
    {
      id: 3,
      baslik: "Makarna",
      malzemeler: "Makarna, sos, peynir",
      yapilis:
        "Makarnayı haşlayın, sosu hazırlayın, makarnayla karıştırın, peynir ekleyin",
      ekleyen: "Elif",
      resimUrl:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/yuzuk-makarna-yemegi-0c54d6a4-1155-4707-9f1e-cb766f2f3782.jpg",
    },
    {
      id: 4,
      baslik: "Spagetti",
      malzemeler: "Spagetti, yumurta, Parmesan peyniri, tuz, karabiber, sosis",
      yapilis:
        "Spagettiyi haşlayın. Sosisi doğrayın ve kızartın. Yumurta, Parmesan peyniri, tuz ve karabiberi çırpın. Spagetti ve sosisi tavada karıştırın. Sonra karışıma yumurtayı ekleyin ve karıştırın.",
      ekleyen: "Özge",
      resimUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpcRVL7X6_d-ZFFkgl1ATpw_3zlQnnUqi3Q&usqp=CAU",
    },
    {
      id: 5,
      baslik: "Lahmacun",
      malzemeler: "Un, su, kıyma, soğan, domates, biber, maydanoz, baharatlar",
      yapilis:
        "Hamur için un ve suyu karıştırıp yoğurun. Kıymayı, soğanı, domatesi, biberi, maydanozu ve baharatları karıştırıp hamura yayın. Fırında pişirin.",
      ekleyen: "Fatma",
      resimUrl:
        "https://i.lezzet.com.tr/images-xxlarge/ev-usulu-lahmacun-6ce8e960-37ae-4e7a-932f-7e5226d9df93",
    },
    {
      id: 6,
      baslik: "Tavuk Şiş",
      malzemeler: "Tavuk göğsü, biber, soğan, zeytinyağı, tuz, karabiber",
      yapilis:
        "Tavuk göğsünü küçük parçalara kesin. Biberleri ve soğanı değişen şekillerde kesin. Tavuk parçalarını, biber ve soğanla şişe dizin. Zeytinyağı, tuz ve karabiberle marine edin. Izgarada pişirin.",
      ekleyen: "Mehmet",
      resimUrl:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/tavada-tavuk-sis-c52c42fe-a396-495d-b649-563cf6e0e616.jpg",
    },
    {
      id: 7,
      baslik: "Perde Pilavı",
      malzemeler: "Pirinç, biber, soğan, zeytinyağı, tuz, karabiber",
      yapilis:
        "Pirinçleri yıkayın. Biberleri ve soğanı değişen şekillerde kesin. Tavuk parçalarını, biber ve soğanla şişe dizin. Zeytinyağı, tuz ve karabiberle marine edin. Izgarada pişirin.",
      ekleyen: "Gizem",
      resimUrl:
        "https://i4.hurimg.com/i/hurriyet/75/750x422/5fb28cbec03c0e0b60bdd016.jpg",
    },
    {
      id: 8,
      baslik: "Karnıyarık",
      malzemeler: "Patlıcan, biber, soğan, zeytinyağı, tuz, karabiber",
      yapilis:
        "Patlıcanları parça parça kesin. Biberleri ve soğanı değişen şekillerde kesin. Tavuk parçalarını, biber ve soğanla şişe dizin. Zeytinyağı, tuz ve karabiberle marine edin. Izgarada pişirin.",
      ekleyen: "Pınar",
      resimUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n9qtlOhO17pmFLqIVQKe6KJEwnq3MoOJrA&usqp=CAU",
    },
  ]);

  const [aramaSorgusu, setAramaSorgusu] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSave = (tarif) => {
    setYemekTarifleri([...yemekTarifleri, tarif]);
    setShowModal(false);
  };

  const filteredTarifler = yemekTarifleri.filter((tarif) =>
    tarif.baslik.toLowerCase().includes(aramaSorgusu.toLowerCase())
  );

  return (
    <div className="App">
      <main>
        {" "}
        <Container>
          <Row className="card-row">
            <Col>
              <Navbar expand="lg">
                <a class="navbar-brand" href="#">
                  <img
                    src="https://i.hizliresim.com/d6xm7gs.png"
                    width="200"
                    height="150"
                    alt=""
                  />
                </a>
                <Col></Col>
                <Form className="d-flex ms-5 me-5">
                  <InputGroup>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      variant="outline-light"
                      onChange={(e) => setAramaSorgusu(e.target.value)}
                    />


                  </InputGroup>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Button
                      onClick={() => setShowModal(true)}
                      style={{
                        backgroundColor: "Chocolate",
                        borderColor: "white",
                        height: "20",
                      }}
                    >
                      Yeni Tarif Ekle
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Container>
          {filteredTarifler.length > 0 ? (
            <Row className="card-row">
              <Col>
                <YemekTarifiListesi yemekTarifleri={filteredTarifler} />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <p className="text-center">Bulunamadı</p>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <footer className="mt-5">
        <Container>
          <Row>
            <Col>
              <p className="text-center"><em>© Yemek Tarifleri - Özge Bahçeci 2023</em></p>
            </Col>
          </Row>
        </Container>
      </footer>
      <YeniTarifModal showModal={showModal} handleSave={handleSave} />
    </div>
  );
}

export default App;
