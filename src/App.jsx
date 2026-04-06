import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">SMS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-3">Student Management System</h1>
      <p className="lead">Manage students efficiently with a simple UI</p>
    </div>
  );
}

function Register() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3 text-center">Register</h3>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3 text-center">Login</h3>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3>Contact Us</h3>
        <p>Email: support@sms.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3>About</h3>
        <p>This is a simple Student Management System UI built using React and Bootstrap.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
