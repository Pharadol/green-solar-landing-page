import Installer from "../../components/section/Installer"
import Power from "../../components/section/Power"
import Solar from "../../components/section/Solar"

const LandingPage = () => {
  return (
    <div className="text-green-700">App
      <h1>Landingpage</h1>
      <Solar/>
      <Installer />
      <Power />
    </div>
  )
}

export default LandingPage
