import { useContext } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from "../Context";

import IconHeart from "./IconHeart";

function Gallery( ) {

  const { fotos } = useContext(MyContext);

  //console.log(fotos)

  const meGusta = (index) => {

    fotos[index].liked = !fotos[index].liked;

    const imagen = event.target;

    //console.log(fotos)

  };

  return (
    <div className="galeria">
 
      <div className="gallery grid-columns-5 p-3">

      {fotos.map((foto,i) => (
        <Card key={i} className="bg-dark text-white">
          <Card.Img src={foto.src.tiny}/>
          <Card.ImgOverlay>
            <div className="elementos-card">
              <div className="boton-mg">
              <IconHeart indice={i}/>
              </div>
              <div className="desc-imagen">
                <Card.Text>
                  {foto.alt}
                </Card.Text>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
    )
  )}
      
      </div>;

    </div>
    
  );
}

export default Gallery;
