import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MyContext from "./Context"

import imagenes from "../public/photos.json"

import 'bootstrap/dist/css/bootstrap.min.css';

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {

  const[fotos,setFotos] = useState(imagenes.photos)
  const sharedData = {fotos,setFotos}
   
  return (
    <div>

      <MyContext.Provider value = {sharedData}>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>

      </MyContext.Provider>
    </div>
  );
};
export default App;
