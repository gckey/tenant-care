import { useState } from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import './App.css'
import Header from './components/Header';
import MaintenanceReqList from './components/MaintenanceReqList';


//Render all components
function App() {
  const [user, setUser] = useState("")

  const onLogInClicked = (username, password) => {
    console.log("LOGIN--->", username, password);
  };
  
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <HomePage />
        {/* {!user && <LogInPage onLogInClicked={onLogInClicked} />} */}
        <LogInPage />
      </main>
    </div>
  );
};

export default App;
