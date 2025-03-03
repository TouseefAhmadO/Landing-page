import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Agency from "./pages/Agency";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Discount from "./pages/Discount";
import Footer from "./pages/Footer";
import { AppStyle } from "./styles";

function App() {
  return (
    <AppStyle>
      <Header />
      <Agency />
      <Service />
      <Project />
      <Contact />
      <Discount />
      <Footer />
    </AppStyle>
  );
}

export default App;
