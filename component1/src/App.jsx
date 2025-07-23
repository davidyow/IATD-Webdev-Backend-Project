import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './components/CoursesPage.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
