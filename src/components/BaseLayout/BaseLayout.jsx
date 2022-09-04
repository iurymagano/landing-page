import { Header } from '../Header/Header'
import { Menu } from '../Menu/Menu'

export function BaseLayout(props) {
  return (
    <>
      <div className='flex'>
       <Menu />
          <div className="menu">{props.children}</div>
      </div>


    </>
  )
}