import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Button } from '../Button/Button';


export function Header()  {
const navigate = useNavigate();

function logout() {
  localStorage.removeItem('user-token');
  navigate('/')
}

  return(
    <div className="py-4 px-6 bg-white border-b-[1px] border-zinc-500">
      <div className="max-w-5xl my-0 mx-auto flex items-center">
        <img className='w-12 h-12' src={logo} />
        <div className='font-semibold mx-auto flex gap-5 items-center'>
         
          <Button 
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-700"
            label="Sair"
            onClick={() => logout()}
          />
        </div>
        
      </div>
    </div>

  );
}