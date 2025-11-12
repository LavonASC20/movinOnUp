import {
    HashRouter as Router, // <-- Change here
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LandingPageSubsection } from "./sections/LandingPageSubsection";
import { OurMissionSubsection } from "./sections/OurMissionSubsection";
import { OurServicesSubsection } from "./sections/OurServicesSubsection/OurServicesSubsection";
import { OurTeamSubsection } from "./sections/OurTeamSubsection";
import { OurContactFormSubsection } from "./sections/OurContactFormSubsection";

export const Frame = (): JSX.Element => {
  return (
    <div
      className="bg-transparent flex flex-col items-center w-full"
      data-model-id="320:401"
    >
        <Router>
            <Routes>
                <Route path='/' element={<LandingPageSubsection />} />
                <Route path='/ourmission' element={<OurMissionSubsection />} />
                <Route path='/ourservices' element={<OurServicesSubsection />} />
                <Route path='/ourteam' element={<OurTeamSubsection />} />
                <Route path='/ourcontactform' element={<OurContactFormSubsection/>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    </div>
  );
};