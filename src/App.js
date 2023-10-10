import NavBar from "./components/NavBar";
import {HomeScreen} from './components/screens/HomeScreen/HomeScreen';
import Contact from "./components/screens/ContactScreen/Contact";
import {AboutScreen} from './components/screens/AboutScreen/AboutScreen';
import {MissionScreen} from './components/screens/MissionScreen/MissionScreen';
import {GCS_NVOCC_Screen} from './components/screens/services-screens/GCS-NVOCC-Screen/GCSNVOCCScreen';
import {AFS_RT_Services} from './components/screens/services-screens/AFS-RT-Services/AFS-RT-Services';
import {Sea_AirCT_ATT_Services} from './components/screens/services-screens/Sea_AirCT-ATT-Services/Sea_AirCT-ATT-Services';
import {SHCL_ET_Services} from './components/screens/services-screens/SHCL-EC-Services/SHCL-EC-Services';
import {CostumerSupportScreen} from './components/screens/CostumerSupportScreen/CostumerSupportScreen';


function App() {
  return (
    <>
      <NavBar />
      <div className="pages">
        <HomeScreen id="home" />
        <AboutScreen id="about" />
        <MissionScreen id="mission" />
        <GCS_NVOCC_Screen id="gcs-nvocc-services" />
        <AFS_RT_Services id="afs-rt-services" />
        <Sea_AirCT_ATT_Services id="sea/airct-att-services" />
        <SHCL_ET_Services id="shcl-et-services" />
        <CostumerSupportScreen id="costumer-support" />
        <Contact/>
      </div>
    </>
  );
}

export default App;
