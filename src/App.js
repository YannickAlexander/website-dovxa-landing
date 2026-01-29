import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IgniteFest from './pages/IgniteFest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ignitefest" element={<IgniteFest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;