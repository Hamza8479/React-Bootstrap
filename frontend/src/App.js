import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Slider from "./components/Slider";
import Main from "./components/Main";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Main />
      <Services />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
