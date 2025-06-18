import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import Membership from './pages/Membership';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path='/seminary' />
        <Route element={<Membership />} path='/seminary/membership' />
      </Routes>
    </div>
  );
}

export default App;
