import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home.jsx";
// import AboutUs from "./components/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Mission from "./components/Mission.jsx";
import History from "./components/History.jsx";
import Company from "./components/Company.jsx";
import Team from "./components/Team.jsx";
import WrongPath from "./components/WrongPath.jsx";
import Members from "./components/Members.jsx";
import MemberDetail from "./components/MemberDetail.jsx";

const LazyAboutUs = React.lazy(() => import("./components/AboutUs.jsx"));

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={
          <React.Suspense>
            <LazyAboutUs/>
          </React.Suspense>
        } />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/history" element={<History/>}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberId" element={<MemberDetail />} />

        <Route path="*" element={<WrongPath/>} />
      </Routes>
    </div>
  )
}

export default App
