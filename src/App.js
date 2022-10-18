import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import Add from "./components/Add";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Header />
      {window.location.pathname === "/login" ||
      window.location.pathname === "/register" ? null : (
        <Nav />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
