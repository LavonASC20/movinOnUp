import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LandingPageSubsection } from "./sections/LandingPageSubsection";
import { OurMissionSubsection } from "./sections/OurMissionSubsection";
import { OurServicesSubsection } from "./sections/OurServicesSubsection/OurServicesSubsection";
import { OurTeamSubsection } from "./sections/OurTeamSubsection";

export const Frame = (): JSX.Element => {
  return (
    <div
      className="bg-transparent flex flex-col items-center w-full"
      data-model-id="320:401"
    >
        <Router>
            <Routes>
                <Route path = '/movinOnUp/' element = {<LandingPageSubsection />} />
                <Route path = '/movinOnUp/ourmission' element = {<OurMissionSubsection />} />
                <Route path = '/movinOnUp/ourservices' element = {<OurServicesSubsection />}/>
                <Route path = '/movinOnUp/ourteam' element = {<OurTeamSubsection />}/>
                <Route path = '*' element = {<Navigate to = '/movinOnUp/' />} />
            </Routes>
        </Router>
    </div>
  );
};
