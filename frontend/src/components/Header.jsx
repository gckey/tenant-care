
/**
 * Displays the title and the current user, Has a logout button
 * @param {text, logout} props
 * @returns 
 */
const Header = (props) => {

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">TenantCare App</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Request Maintenance</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right nav-options">
          <li><button className="btn btn-primary"><span className="glyphicon glyphicon-user"></span> Sign Up</button></li>
          <li><button className="btn btn-primary"><span className="glyphicon glyphicon-log-in"></span> Login</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;