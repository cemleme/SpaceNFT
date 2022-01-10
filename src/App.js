import { TopMenu } from "./TopMenu";
import { useSelector } from "react-redux";
import { Shop } from "./pages/Shop.js";
import { Fleet } from "./pages/Fleet.js";
import { Explore } from "./pages/Explore.js";
import { UserData } from "./components/UserData.js";
import styled from "styled-components";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="bgOverlay" />

        <BrowserRouter>
          <TopMenu />
          <Routes>
            <Route path="/explore" element={
              <div className="mainContent">
                      <div className='pageTitle'> Explore </div>
                      <Explore />
              </div>} />

            <Route path="/shop" element={
              <div className="mainContent">
                      <div className='pageTitle'> Shop </div>
                      <Shop />
              </div>} />

            <Route path="/fleet" element={
              <div className="mainContent">
                      <div className='pageTitle'> Fleet </div>
                      <Fleet />
              </div>} />
          </Routes>
        </BrowserRouter>
      <UserData />
    </>
  );
}

const Menu__darkerBG = styled.div`
  background-color: #161616bd;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
