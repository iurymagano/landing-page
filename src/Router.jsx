import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login';
import { Header } from './components/Header/Header';
import { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'


function Private({ Item }) {
  const [logado, setLogado] = useState(false);

  function usuarioLogado(estado) {
      setLogado(estado)
      console.log('tempo')
  }

  return logado ? <Item /> : <Login usuarioLogado={usuarioLogado} />
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/home' element={<Private Item={Header} />} />
          <Route path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

