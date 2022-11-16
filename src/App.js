import "./App.css";
// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import containers
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Series from "./Containers/Series/Series";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/series" element={<Series />} />
          /*<Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
