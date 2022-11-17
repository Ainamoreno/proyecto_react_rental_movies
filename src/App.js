import "./App.css";
// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import containers
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Series from "./Containers/Series/Series";
import Movies from "./Containers/Movies/Movies";
import Login from "./Containers/User/Login/Login";
import Profile from "./Containers/User/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
