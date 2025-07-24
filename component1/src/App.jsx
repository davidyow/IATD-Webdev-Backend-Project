import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesPage from './components/CoursesPage.jsx';
import DetailPage from './components/DetailPage.jsx';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
