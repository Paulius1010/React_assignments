// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Task7 from './components/Task7';
import AvatarPage from './components/AvatarPage';



function App() {
  return (
    <Router>
      <nav>
        <lu>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/task7">Task7</Link>
          </li>
        </lu>

      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/task7" element={<Task7 />}></Route>
        <Route path="/task7/:avatarname" element={<AvatarPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

  
    </Router>
  );
}

export default App;
