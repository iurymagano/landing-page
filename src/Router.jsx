import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login';
import { Fragment, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main/Main';
import { AuthContext } from './Contexts/AuthContext';


function Private({ Item }) {
  const { usuario } = useContext(AuthContext);
  return localStorage.getItem('user-token') ? <Item /> : <Login />}

export const Router = () => {
 
  return (
    <BrowserRouter>
      <Fragment>
          <Routes>
            <Route path='/in' element={<Private Item={Main} />} />
            <Route path='/' element={<Login />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

