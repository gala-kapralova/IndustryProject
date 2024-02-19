import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from './components/MyProfile/MyProfile';
import Verification from './components/Verification/Verification';
import VerifyWithClear  from './components/VerifyWithClear/VerifyWithClear';
import MyBadges from './components/MyBadges/MyBadges';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<MyProfile />} /> 
       <Route path="/verification" element={<Verification />} /> 
       <Route path="/verify-with-clear" element={<VerifyWithClear />} />
       <Route path="/badges" element={<MyBadges />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
