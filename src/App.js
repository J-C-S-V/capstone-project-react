import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import Modal from './components/Modal';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
