import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("Your'e loggedout");
    navigate("/login");
  }

  return (
    <>

      <div>
        <div className="column side">
          <img src="/maintenance@2x_0.png.webp" width="373" height="359" alt="landing page image" className="feature" />
        </div>

        <div className="column middle">
          <div>
            <h2>Simplify Suite Maintenance Requests</h2>
            <p className="p1">
              Landlords, your <strong>tenant's</strong> satisfaction begins here. TenantCare provides the simplest solution for your tenants to report any maintenance concern they may have.
            </p>
          </div>
          <div>
            <br /><br />
            <h3>Manage Online Maintenance Requests</h3>
            <p className="p1">
              Whether it’s a leaky faucet, a broken air conditioner, a malfunctioning thermostat, a burst water pipe, or a sliding door that’s come off of its track, maintenance requests can quickly become overwhelming. But with TenantCare App, your tenants can submit maintenance requests online whenever they want. Easily review maintenance requests and coordinate with your renters and service professionals. From your dashboard, you can:
              <ul>
                <li>View and Manage Requests</li>
                <li>Update Request Status</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="column right">
          <img src="/apartment_01.png" width="373" height="359" alt="apartment" className="feature" />
        </div>
      </div>
    </>
  );

};

export default HomePage;