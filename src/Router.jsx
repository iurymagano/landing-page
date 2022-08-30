import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login';
import { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main/Main';


function Private({ Item }) {
  const [logado, setLogado] = useState(false);

  function usuarioLogado(estado) {
      setLogado(estado)
  }

  return logado ? <Item /> : <Login usuarioLogado={usuarioLogado} />
}

export const Router = () => {
  const [logado, setLogado] = useState(false);

  function usuarioLogado(estado) {
    setLogado(estado)
    console.log('tempo')
}
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={logado ? <Login usuarioLogado={usuarioLogado} /> : <Private Item={Main} />} />
          <Route path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

