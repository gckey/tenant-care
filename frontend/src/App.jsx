import { useState } from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import './App.css'
import Header from './components/Header';


//Render all components
function App() {
  const [user, setUser] = useState("")

  const onLogInClicked = (username, password) => {
    console.log("LOGIN--->", username, password);
  };
  
  return (
    <div>
      <h1>Tenant-Care App</h1>
      <Header />
      <HomePage />
      {!user && <LogInPage onLogInClicked={onLogInClicked} />}
    </div>
  );
};

export default App;
