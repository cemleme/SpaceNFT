import { useSelector } from "react-redux";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";
import Menu from "./Menu";
import Fleet from "./Fleet";
import Home from "./Home";
import Objectives from "./Objectives";
import Shop from "./Shop";
import { ArwesThemeProvider, StylesBaseline, Button, FrameCorners, Text } from "@arwes/core";
import "./App.css";
const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';

const SOUND_OBJECT_URL =
  "https://playground.arwes.dev/assets/sounds/object.mp3";
const SOUND_TYPE_URL = "https://playground.arwes.dev/assets/sounds/type.mp3";
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true },
};
const bleepsSettings = {
  object: { player: "object" },
  type: { player: "type" },
};
const generalAnimator = { duration: { enter: 200, exit: 200 } };

function App() {
  const page = useSelector((state) => state.page);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{ body: { fontFamily: ROOT_FONT_FAMILY } }} />
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <AnimatorGeneralProvider animator={generalAnimator}>
          <div className="home">
            <Menu />
            {page === "HOME" && <Home />}
            {page === "OBJECTIVES" && <Objectives />}
            {page === "FLEET" && <Fleet />}
            {page === "SHOP" && <Shop />}
          </div>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
}

export default App;
