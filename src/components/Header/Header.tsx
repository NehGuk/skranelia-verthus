import "./Header.css"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header>
      <article className="logo-container">
        <img src={logo} className="logo-header"></img>
      </article>
    </header>
  )
}

export default Header
