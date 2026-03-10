import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Home from './pages/Home';
import SchoolDetail from './pages/SchoolDetail';
import TeacherDetail from './pages/TeacherDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/" className="nav-brand">
            <BookOpen size={28} />
            上海科创大区基础教育研判系统中枢
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school/:id" element={<SchoolDetail />} />
          <Route path="/teacher/:id" element={<TeacherDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
