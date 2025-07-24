import { useLocation, useNavigate } from 'react-router-dom';

function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const buttonIdentifier = new URLSearchParams(location.search).get('button');

    const handleGoBack = () => {
        navigate('/');
    };

    return (
      <div>
        <div className='app-header'> Course Details</div>
        <div className="course-container card">
          <legend className="course-title">Main Page</legend>
          <div className="app-buttons text-center">
            <div>You logged in as: {buttonIdentifier}</div>
            <button onClick={handleGoBack}>Return</button>
          </div>
        </div>
      </div>
    );
}

export default DetailPage;
