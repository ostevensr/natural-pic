import Gallery from "../components/Gallery";
import { useContext } from "react";
import MyContext from "../Context";

const Home = () => {

  return (
    <div className="App">
      <h1 className="titulo-seccion">Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
