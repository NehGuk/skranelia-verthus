import Welcome from "../Welcome/Welcome"
import Menu from "../Menu/Menu"
import { menu } from "../../data/menu"
import Wifi from "../Wifi/Wifi"

function Main() {
  return (
    <main>
      <Welcome />
      <Menu menu={menu} />
      <Wifi />
    </main>
  )
}

export default Main
