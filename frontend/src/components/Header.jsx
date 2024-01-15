import { Link  } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticationStatus } = useContext(AuthContext);

  const handleLogout = () => {
    // Remove the user's token or auth data from localStorage
    localStorage.removeItem('userToken');

    // Update the authentication status in your application state
    setAuthenticationStatus(false);
    // Redirect to login page or home page after logout
    navigate("/login");
      
  
   
  };

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand">TenantCare App</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/maintenance">Request Maintenance</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right nav-options">
          {isAuthenticated ? (
            <li><button className="btn btn-primary" onClick={handleLogout}><span className="glyphicon glyphicon-log-out"></span> Logout</button></li>
          ) : (
            <>
              <li><button className="btn btn-primary"><span className="glyphicon glyphicon-user"></span> <Link to="/signup">Sign Up</Link></button></li>
              <li><button className="btn btn-primary"><span className="glyphicon glyphicon-log-in"></span> <Link to="/login">Login</Link></button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
