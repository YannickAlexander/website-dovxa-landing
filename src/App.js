import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IngineFest from './pages/IngineFest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inginefest" element={<IngineFest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;