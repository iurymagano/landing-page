import { Header } from '../Header/Header'

export function BaseLayout(props) {
  return (
    <>
      <div className="baseLayout">
        <div>
          <Header />
        </div>
        <div className="menu">menu</div>
        <div className="menu">{props.children}</div>
      </div>
    </>
  )
}