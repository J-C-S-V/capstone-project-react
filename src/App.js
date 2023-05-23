import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
