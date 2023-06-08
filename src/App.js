import './App.css';
import Navigation from './components/navigation/Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
