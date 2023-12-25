import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("Your'e loggedout");
    navigate("/login");
  }

  return (
    <div>
      <Link to="/login">
        Logout
      </Link>
      <button className="btn btn-info"
        onClick={() => logout()}>Logout
      </button>

      <p className="content-container">
        Landlords, your <strong>tenant's</strong> satisfaction begins here. TenantCare provides the simplest solution for your tenants to report any maintenance concern they may have.
      </p>
    </div>
  );

};

export default HomePage;