import { useContext} from "react";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from "../Context";

const Favorites = () => {

  const { fotos } = useContext(MyContext);

  //console.log(fotos)

  const fotosLiked = fotos.filter((foto) => foto.liked === true);

  console.log(fotosLiked)

  return (
    <div className="App">
      <h1 className="titulo-seccion">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">

      {fotosLiked.map((foto,i) => (
        <Card key={i} className="bg-dark text-white">
          <Card.Img src={foto.src.tiny}/>
          <Card.ImgOverlay>
            <div className="elementos-card">
            </div>
          </Card.ImgOverlay>
        </Card>
    )
  )}
      </div>
    </div>
  );
};
export default Favorites;
