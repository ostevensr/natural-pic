import { useContext } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from "../Context";

function Gallery( ) {

  const { fotos } = useContext(MyContext);

  console.log(fotos)

  const galeria = fotos.map((foto,i) => (
    <Col key={i} xs={15} sm={6} md={5} lg={3} xl={3}>
        <Card className="bg-dark text-white">
          <Card.Img src={foto.src.tiny}/>
          <Card.ImgOverlay>
            <div className="elementos-card">
              <div className="boton-mg">
                <img src="./src/assets/icons/heart.svg"></img>
              </div>
              <div className="desc-imagen">
                <Card.Text>
                  {foto.alt}
                </Card.Text>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    )
  )

  return (
    <div className="galeria">
      <Row>

        {galeria}

      </Row>
    </div>
    
  );
}

export default Gallery;

