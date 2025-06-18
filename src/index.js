import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import './index.css'; 
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter >
      <QueryClientProvider client={queryClient}>
        <Routes >
          <Route path="/*" element={<App />} />
        </Routes>
      </QueryClientProvider>
  </BrowserRouter>
)
