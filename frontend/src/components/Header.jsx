
/**
 * Displays the title and the current user, Has a logout button
 * @param {text, logout} props
 * @returns 
 */
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand">TenantCare App</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/login">Request Maintenance</Link></li>
          <li><Link to="/home">Dashboard</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right nav-options">
          <li><button className="btn btn-primary"><span className="glyphicon glyphicon-user"></span> <Link to="/signup">Sign Up</Link></button></li>
          <li><button className="btn btn-primary"><span className="glyphicon glyphicon-log-in"></span> <Link to="/login">Login</Link></button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;