import { useContext, useState} from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from "../Context";

function Gallery( ) {

  const { fotos } = useContext(MyContext);
  const [fotosState, setFotosState] = useState(fotos);

  //console.log(fotos)

  const meGusta = (index) => {
    const nuevasFotos = [...fotos];

    nuevasFotos[index].liked = !nuevasFotos[index].liked;

    setFotosState(nuevasFotos);

    console.log(nuevasFotos)
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
                <img  onClick={() => meGusta(i)} src="./src/assets/icons/heart.svg"></img>
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

