import { Outlet } from "react-router-dom";
import "./App.css";
import Navitems from "./Components/Navitems.jsx";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navitems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
