import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import User from "./Pages/User";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/User/:Username" element={<User />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="#" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
