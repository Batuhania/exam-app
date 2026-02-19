import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import QuickTest from './pages/QuickTest';
import Cards from './pages/Cards';
import Pomodoro from './pages/Pomodoro';
import QuizPage from './pages/QuizPage';
import InterviewPrep from './pages/InterviewPrep';
import LectureView from './pages/LectureView';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import MockExam from './pages/MockExam';
import CheatSheet from './pages/CheatSheet';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="quick-test" element={<QuickTest />} />
          <Route path="cards" element={<Cards />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="interview" element={<InterviewPrep />} />
          <Route path="lecture/:topicId" element={<LectureView />} />
          <Route path="stats" element={<Stats />} />
          <Route path="quiz/:topicId" element={<QuizPage />} />
          <Route path="mock-exam" element={<MockExam />} />
          <Route path="cheat-sheet" element={<CheatSheet />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
