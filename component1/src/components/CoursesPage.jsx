import { useState } from 'react'
import './css/styles.css'
import image1 from './images/lightsaber-collection-T-IN5o3kxyA-unsplash.jpg'
import image2 from './images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import image3 from './images/kirill-sh-ohBcGYJ8brQ-unsplash.jpg'
import image4 from './images/imgix-klWUhr-wPJ8-unsplash.jpg'
import { useLocation, useNavigate } from 'react-router-dom';


function CoursesPage() {
  const navigate = useNavigate();

  const handleButtonClick = (identifier) => {
    if (identifier == 'IOCENCT') { 
    navigate(`/course1?button=${identifier}`);
    }
    if (identifier == 'ENARSI') { 
    navigate(`/course2?button=${identifier}`);
    }
    if (identifier == 'ENAUI') { 
    navigate(`/course3?button=${identifier}`);
    }
    if (identifier == 'ENSDWI') { 
    navigate(`/course4?button=${identifier}`);
    }
  };

  return (
    <div >
      <div>
        <div>
          <h1 className=' app-header-main-page app-header'>Course List</h1>
        </div>
      </div>
      <div className="cards-container">

        <div className="card"> 
          <h3 className='card-header'>
                Implementing and Operating Cisco Enterprise Network Core Technologies
          </h3>
          <div>
            <img src={image1} className="card-img"/>
          </div>
          <div className='course-card-paragraph'>
                This training prepares you for the 350-401 ENCOR exam. If passed, you earn the Cisco Certified Specialist – Enterprise Core certification 
                and satisfy the core exam requirements for the Cisco Certified Network Professional (CCNP) Enterprise, 
                Cisco Certified Internetwork Expert (CCIE) Enterprise Infrastructure, and CCIE Enterprise Wireless certifications.
          </div>
          <div className='course-card-paragraph'>Hours: 100</div>
          <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('IOCENCT')}>
           Course Details
          </button>
        </div>

        <div className="card"> 
          <h3 className='card-header'>
                Implementing Cisco Enterprise Advanced Routing and Services
          </h3>
          <div>
            <img src={image2} className="card-img"/>
          </div>
          <div className='course-card-paragraph'>
                The Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) training gives you the knowledge and skills needed to install, configure, operate, 
                and troubleshoot a dual stack enterprise network.
          </div>
          <div className='course-card-paragraph'>Hours: 50</div>
          <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENARSI')}>
           Course Details
          </button>
          </div>

        <div className="card"> 
          <h3 className='card-header'>
                Implementing Automation for Cisco Enterprise Solutions
          </h3>
          <div>
              <img src={image3} className="card-img"/>
          </div>
          <div className='course-card-paragraph'>
                The Implementing Automation for Cisco Enterprise Solutions (ENAUI) training teaches you how to implement Cisco Enterprise automated solutions, 
                including programming concepts, orchestration, telemetry, and automation tools.
          </div>
          <div className='course-card-paragraph'>Hours: 80</div>
            <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENAUI')}>
           Course Details
            </button>
          </div>
        </div>

        <div className="card"> 
          <h3 className='card-header'>
                Implementing Cisco SD-WAN Solutions
          </h3>
          <div>
            <img src={image4} className="card-img"/>
          </div>
          <div className='course-card-paragraph'>
                The Implementing Cisco SD-WAN Solutions (ENSDWI) training helps you design, deploy, configure, and manage the Cisco Software-Defined WAN (SD-WAN) solution in a large-scale network, including how to migrate from legacy WAN to Cisco SD-WAN.
          </div>
          <div className='course-card-paragraph'>Hours: 75</div>
            <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENSDWI')}>
           Course Details
            </button>
          </div>

          </div>

  );
}

export default CoursesPage;
