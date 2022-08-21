import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function Header() {
  return(
    <div className="py-4 bg-white border-b-[1px] border-zinc-500">
      <div className="max-w-5xl my-0 mx-auto flex items-center">
        <img className='w-12 h-12' src={logo} />
        <div className='font-semibold mx-auto flex gap-5'>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </div>
        
      </div>
    </div>

  );
}