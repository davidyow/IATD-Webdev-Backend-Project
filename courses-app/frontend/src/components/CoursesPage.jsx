import './css/CoursesPage.css'
import { useLocation, useNavigate } from 'react-router-dom';


function CoursesPage() {

  return (
    <div className="container">
      <div>

        <div>
          <h1 className=' app-header-main-page app-header'>Course List</h1>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-flex-container">
          <div className="dashboard-item"> <fieldset className="action-container card">
            <div className="app-buttons text-center">
              <div className='course-card-header'>
                Implementing and Operating Cisco Enterprise Network Core Technologies
              </div>
              <div className='course-card-paragraph'>
                This training prepares you for the 350-401 ENCOR exam. If passed, you earn the Cisco Certified Specialist – Enterprise Core certification 
                and satisfy the core exam requirements for the Cisco Certified Network Professional (CCNP) Enterprise, 
                Cisco Certified Internetwork Expert (CCIE) Enterprise Infrastructure, and CCIE Enterprise Wireless certifications.
              </div>
              <div className='course-card-paragraph'>Hours: 100</div>
              <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('IOCENCT')}>
                <span className="visually-hidden">Course Details</span>
              </button>
            </div>
          </fieldset>
          </div>
          <div className="dashboard-item"> <fieldset className="action-container card">
            <div className="app-buttons text-center">
              <div className='course-card-header'>
                Implementing Cisco Enterprise Advanced Routing and Services
              </div>
              <div className='course-card-paragraph'>
                The Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) training gives you the knowledge and skills needed to install, configure, operate, 
                and troubleshoot a dual stack enterprise network.
              </div>
              <div className='course-card-paragraph'>Hours: 50</div>
              <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENARSI')}>
                <span className="visually-hidden">Course Details</span>
              </button>
            </div>
          </fieldset>
          </div>
                  <div className="dashboard-item"> <fieldset className="action-container card">
            <div className="app-buttons text-center">
              <div className='course-card-header'>
                Implementing Automation for Cisco Enterprise Solutions
              </div>
              <div className='course-card-paragraph'>
                The Implementing Automation for Cisco Enterprise Solutions (ENAUI) training teaches you how to implement Cisco Enterprise automated solutions, 
                including programming concepts, orchestration, telemetry, and automation tools.
              </div>
              <div className='course-card-paragraph'>Hours: 80</div>
              <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENAUI')}>
                <span className="visually-hidden">Course Details</span>
              </button>
            </div>
          </fieldset>
          </div>
                  <div className="dashboard-item"> <fieldset className="action-container card">
            <div className="app-buttons text-center">
              <div className='course-card-header'>
                Implementing Cisco SD-WAN Solutions
              </div>
              <div className='course-card-paragraph'>
                The Implementing Cisco SD-WAN Solutions (ENSDWI) training helps you design, deploy, configure, and manage the Cisco Software-Defined WAN (SD-WAN) solution in a large-scale network, including how to migrate from legacy WAN to Cisco SD-WAN.
              </div>
              <div className='course-card-paragraph'>Hours: 75</div>
              <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick('ENSDWI')}>
                <span className="visually-hidden">Course Details</span>
              </button>
            </div>
          </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;