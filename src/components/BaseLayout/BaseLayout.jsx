import { Header } from '../Header/Header'
import { Menu } from '../Menu/Menu'

export function BaseLayout(props) {
  return (
    <>
      <div className='flex bg-[#242526] gap-4'>
       <Menu />
          <div className="w-full h-full">{props.children}</div>
      </div>


    </>
  )
}