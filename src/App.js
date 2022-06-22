import "./App.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Table from "./Table";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import AddUser from "./AddUser";
import AddProduct from "./AddProduct";



function App() {
  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/table" element={<Table />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/table/adduser" element={<AddUser />} />
                  <Route path="/table/addproduct" element={<AddProduct />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
