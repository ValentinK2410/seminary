import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import Membership from './pages/Membership';
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/seminary" />
          <Route element={<Membership />} path="/seminary/membership" />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
