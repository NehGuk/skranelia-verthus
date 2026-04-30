import "./App.css"
import Header from "./components/Header/Header"
import Welcome from "./components/Welcome/Welcome"
import Menu from "./components/Menu/Menu"
import { menu } from "./data/menu"
import Wifi from "./components/Wifi/Wifi"

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Menu menu={menu} />
      <Wifi />
    </>
  )
}

export default App
