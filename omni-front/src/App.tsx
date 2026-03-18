import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AgePage from './pages/AgePage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
				<Route path="/" element={<Navigate to="/age" />} />
              	<Route path="/age" element={<AgePage />} />
        	</Route>
            <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
