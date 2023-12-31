import { useState } from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import './App.css'
import Header from './components/Header';
import MaintenanceReqList from './components/MaintenanceReqList';
import { Routes, Route } from 'react-router-dom';
import MaintenanceReqEditForm from './components/MaintenanceReqEditForm';




//Render all components
function App() {
  const [userInfo, setUserInfo] = useState({});


  
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<LogInPage setUserInfo={setUserInfo}/>}/>
        <Route 
          path="/login" 
          element={<LogInPage setUserInfo={setUserInfo}/>}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/maintenance-request" element={<MaintenanceReqList userInfo={userInfo}/>}>
          <Route 
            path="/maintenance-request/new" 
            element={<MaintenanceRequestForm />}
          />
          <Route 
            path="/maintenance-request/edit/:id" 
            element={<MaintenanceReqEditForm />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
