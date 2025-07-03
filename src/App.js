import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext';
import Membership from './pages/Membership';
import { AuthProvider } from "./context/AuthContext";
import LK from './pages/LK';

function App() {
  return (
    <div className="App">
    <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<HomePage />} path="/seminary" />
            <Route element={<Membership />} path="/seminary/membership" />
            <Route element={<LK />} path="/seminary/lk" />
          </Routes>
         </ThemeProvider>
    </AuthProvider>
    </div>
  )}

export default App
