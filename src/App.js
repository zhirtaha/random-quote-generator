import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import RandomQuotes from "./components/RandomQuotes";
import DogImages from "./components/DogImages";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<RandomQuotes />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/dogs" element={<DogImages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
