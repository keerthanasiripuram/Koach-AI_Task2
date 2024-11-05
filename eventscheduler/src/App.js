import logo from './logo.svg';
import './App.css';
import Scheduler from './pages/Scheduler';
import { ViewSchedule } from './pages/ViewSchedule';
import { BrowserRouter, Routes, Switch, Route, useNavigate } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Scheduler/>}/>
      <Route path="/view-schedule" element={<ViewSchedule/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
