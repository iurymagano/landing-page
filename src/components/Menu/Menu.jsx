import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { Button } from "../Button/Button";
import { FiLogOut } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { useState } from "react";

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation()

  let BaseLink = '/in';
  const navegacao = [
    { endereco: BaseLink, icone: <AiFillHome className="hover:text-[#140523]" size={24} />, nome: 'Home' },
    { endereco: BaseLink+'/perfil', icone: <AiFillHome className="hover:text-[#140523]" size={24} />, nome: 'Perfil' },
    { endereco: '/', icone: <AiFillHome className="hover:text-[#140523]" size={24} />, nome: 'Home' },
    { endereco: '/', icone: <AiFillHome className="hover:text-[#140523]" size={24} />, nome: 'Home' },
    { endereco: '/', icone: <AiFillHome className="hover:text-[#140523]" size={24} />, nome: 'Home' },
  ]

  let usuario = JSON.parse(localStorage.getItem("user-token"))
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user-token')
    navigate('/login')
  };

  return (
    <div className={`flex flex-col items-center gap-5 ${menu ? 'w-[84px]' : 'w-64'} h-[100vh] py-5 bg-zinc-900 rounded-r-3xl`}>
      <div>
        <img
          className='w-8 h-8 cursor-pointer hover:bg-white rounded-3xl'
          src={logo}
          onClick={() => setMenu(!menu)}
        />
      </div>
      <span className="text-white text-lg mt-5">{!menu && 'Bem vindo,'} {usuario.nome}</span>

      <div className="flex gap-4 flex-col items-center w-full">
        {navegacao.map((navegacao, i) => (
          <NavLink
            key={i}
            className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
            to={navegacao.endereco}
          >
            {navegacao.icone}
            {!menu && navegacao.nome}
          </NavLink>

        ))}

      </div>
      <div className="w-1/2 h-[1px] bg-gray-500"></div>
      <div className="h-full w-full flex justify-center items-end">
        <Button
          className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
          onClick={() => logout()}
        >
          <FiLogOut className="hover:text-[#140523]" size={24} />
          {!menu && 'Logout'}
        </Button>
      </div>
    </div>

  );
}