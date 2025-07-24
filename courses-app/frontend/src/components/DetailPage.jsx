import './css/DetailPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonIdentifier = new URLSearchParams(location.search).get('button');

  const handleGoBack = () => {
      navigate('/');
  };

  const [CourseTitle, setCourseTitle] = useState('');
  const [CourseDescription, setCourseDescription] = useState('');
  const [CourseInstructor, setCourseInstructor] = useState('');
  const [CourseDuration, setCourseDuration] = useState(0);
  const [CourseCategory, setCourseCategory] = useState('');

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`http://localhost:5999/courses/${buttonIdentifier}`);
        setCourseTitle(response.data.title);
        setCourseDescription(response.data.description);
        setCourseInstructor(response.data.instructor);
        setCourseDuration(response.data.duration);
        setCourseCategory(response.data.category);

      } catch (error) {
        console.error(error);
      }
    };
    fetchCourseData();
  }, [buttonIdentifier]);

  return (
    <div className="dashboard-flex-container">
          <div className="dashboard-item">
            <div className="dash-heading">
              Course Details
            </div>
            <table className="course-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Instructor</th>
                <th>Duration</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{CourseTitle}</td>
                <td>{CourseDescription}</td>
                <td>{CourseInstructor}</td>
                <td>{CourseDuration}</td>
                <td>{CourseCategory}</td>
              </tr>
            </tbody>
            </table>
          </div>
          <div>
          <div className="app-buttons logg-off-btn">
            <button onClick={handleGoBack} className="btn btn-primary app-button-hover-effect">Return to Course List</button>
          </div>
        </div>
    </div>
    );
}

export default DetailPage;
