import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Agency from "./components/Agency";
import Service from "./components/Service";
import Discount from "./components/Discount";
import Contact from "./components/contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Agency />
      <Service />
      <Contact />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
