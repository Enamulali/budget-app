import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import Add from "./components/Add";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Header />
      {window.location.pathname === "/login" ? null : <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
