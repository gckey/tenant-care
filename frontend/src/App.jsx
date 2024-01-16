import { useState } from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import MaintenanceRequestForm from './components/MaintenanceRequestForm';
import './App.css'
import Header from './components/Header';
import MaintenanceReqList from './components/MaintenanceReqList';
import { Routes, Route } from 'react-router-dom';
import MaintenanceReqEditForm from './components/MaintenanceReqEditForm';
import Admin from './components/Admin';
import Signup from './components/Signup';
import { AuthProvider } from './components/AuthContext';

//Render all components
function App() {
  const [userInfo, setUserInfo] = useState({});


  
  return (
    <AuthProvider>
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </AuthProvider>
  );
};

export default App;