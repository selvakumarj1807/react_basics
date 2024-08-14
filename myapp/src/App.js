import logo from './logo.svg';
import './App.css';

import Form from './forms/Form';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <Form />

    </div>
  );
}

export default App;
