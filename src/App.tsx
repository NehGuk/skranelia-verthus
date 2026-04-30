import "./App.css"
import logo from "./assets/logo.png"
import Welcome from "./components/Welcome/Welcome"
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <>
    <article className="logo-container">
    <img src={logo} className="logo-header"></img>
    </article>
    <Welcome />
    <Menu />
    </>
  )
}

export default App
