import Installer from "../../components/section/Installer";
import Power from "../../components/section/Power";
import Repairs from "../../components/section/Repairs";
import Solar from "../../components/section/Solar";
import SolarKits from "../../components/section/SolarKits";

const LandingPage = () => {
  return (
    <div>
      <Solar />
      <Installer />
      <Power />
      <SolarKits />
      <Repairs />
    </div>
  );
};

export default LandingPage;
