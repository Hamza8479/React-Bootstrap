import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Slider from "./components/Slider";
import Main from "./components/Main";
import Services from "./components/Services";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Main />
      <Services />
      <Gallery />
    </>
  );
}

export default App;
