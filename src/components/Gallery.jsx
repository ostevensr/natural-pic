import { useContext } from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from "../Context";

function Gallery( ) {

  const { fotos } = useContext(MyContext);

  //console.log(fotos)

  const meGusta = (index) => {

    fotos[index].liked = !fotos[index].liked;

    const imagen = event.target;
    
    if (imagen.src.endsWith("heart-filled.svg")) {
   
      imagen.src = "./src/assets/icons/heart.svg";
    } else {
      
      imagen.src = "./src/assets/icons/heart-filled.svg";
    }

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
                <img id="imagenMeGusta" onClick={(event) => meGusta(i,event)} src="./src/assets/icons/heart.svg"></img>
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

