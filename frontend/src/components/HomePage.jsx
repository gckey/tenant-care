import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    console.log("Your'e loggedout");
    navigate("/login");
  }

  return (
    <>
    
    <div className="row container">
      <div className="column side">
        <h2>Project Summary</h2>
        <p>
        <strong><em>TenantCare App </em></strong>is a single-page web application that improves tenants' convenience and enhances operational efficiency for the landlord. This system will enable tenants to submit emergency and non-emergency repair requests. This system will allow tenants to navigate emergencies reducing wait times and ensuring a seamless renting experience.   
          <br /><br />
        </p>
        <p id="p2">
          <span className="myspan"> Tech Stack:</span> PostgreSQL, Node.js, Express, React, CSS
        </p>

        <br /><br />
        <span>Web dev team:</span><br />
        Abdurahman and Bereket<br />
        Mobile: ###-###-####<br />
        A#A #A#, CA
      </div>

      <div className="column middle">
      <h2>Simplify Suite Maintenance Requests</h2>
      <img src="/public/maintenance@2x_0.png.webp" width="320" height="308" alt="landing page image" className="feature"/>
      <p className="p1">
        Landlords, your <strong>tenant's</strong> satisfaction begins here. TenantCare provides the simplest solution for your tenants to report any maintenance concern they may have. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit ratione iusto tenetur minus molestias, expedita officia voluptates neque eaque. Officia earum molestiae vel maiores ipsa quisquam dignissimos culpa nulla! 
      </p>
    </div>
    </div>
    </>
  );

};

export default HomePage;