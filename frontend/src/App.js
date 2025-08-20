import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import Budget from "./Pages/Budget";
import { BrowserRouter , Routes, Route} from "react-router-dom";

import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="main-content">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/forecast" element={<Forecast />} />
              <Route path="/budget" element={<Budget />} />
            </Routes>
          </BrowserRouter>
        </main>
      </header>
      <Footer />
    </div>
  );
}

export default App;
