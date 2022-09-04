import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Button } from "../Button/Button";

export const Menu = () => {

  let usuario = JSON.parse(localStorage.getItem("user-token"))
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user-token')
    navigate('/login')
};

  return (
    <div className="flex flex-col items-center gap-14 w-64 h-[100vh] py-5 bg-[#140523] rounded-r-3xl">
      <span className="text-white text-lg mt-5">Bem vindo, {usuario.nome}!</span>
     
      <div className="flex gap-4 flex-col items-center w-full">
        <NavLink
          className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
          to='/'
        >
          <AiFillHome className="hover:text-[#140523]" size={24} />
          HOME
        </NavLink>
        <NavLink
          className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
          to='/'
        >
          <AiFillHome className="hover:text-[#140523]" size={24} />
          HOME
        </NavLink>
        <NavLink
          className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
          to='/'
        >
          <AiFillHome className="hover:text-[#140523]" size={24} />
          HOME
        </NavLink>
        <NavLink
          className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
          to='/'
        >
          <AiFillHome className="hover:text-[#140523]" size={24} />
          HOME
        </NavLink>
       
      </div>
      <div className="w-1/2 h-[1px] bg-gray-500"></div>
      <div className="h-full w-full flex justify-center items-end">
      <Button
         className='text-xl gap-6 w-full font-bold transition-all py-2 rounded-r-lg flex items-center justify-center text-white hover:bg-white hover:text-[#140523]'
         onClick={() => logout()}
        >
          <FiLogOut className="hover:text-[#140523]" size={24} />
          Logout
      </Button>
      </div>
    </div>

  );
}