import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './components/CoursesPage.jsx';
import Course1 from './components/Course1Page.jsx';
import Course2 from './components/Course2Page.jsx';
import Course3 from './components/Course3Page.jsx';
import Course4 from './components/Course4Page.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course1" element={<Course1 />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/course3" element={<Course3 />} />
        <Route path="/course4" element={<Course4 />} />
      </Routes>
    </Router>
  );
}

export default App;
