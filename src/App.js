import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import "./index.css";



function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
