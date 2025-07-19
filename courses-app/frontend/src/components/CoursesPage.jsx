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

        </div>
      </div>
    </div>
  );
}