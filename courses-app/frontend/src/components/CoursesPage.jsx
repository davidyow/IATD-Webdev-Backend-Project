import './css/CoursesPage.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CoursesPage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const handleButtonClick = (identifier) => {
    navigate(`/detail?button=${identifier}`);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5999/courses');
        console.log(response);
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className='app-header'> Course List</div>
      <fieldset className="course-fieldset">
        <legend className="course-title">Courses</legend>
        <div className='course-header'>Click on the Course Name button to see course details</div>
        <div className="course-container">
          {courses.map((course, index) => (
            <div className="app-buttons text-center" key={course._id}>
              <button className="btn btn-primary app-button-hover-effect" onClick={() => handleButtonClick(course._id)}>
                <span className="visually-hidden">{course.title}</span>
              </button>
            </div>
          ))}
        </div>

      </fieldset>
    </div>
  );

}

export default CoursesPage;