import logo from './logo.svg';
import './App.css';
import Scheduler from './pages/Scheduler';

import { BrowserRouter, Routes, Switch, Route, useNavigate } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scheduler/>}/>    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
