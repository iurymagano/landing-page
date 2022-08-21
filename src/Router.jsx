import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login';
import { Header } from './components/Header/Header';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/private' element={<Header  />} />
    </Routes>
    

  );
}

