import React, { Suspense, useCallback } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Navbar from './components/Navbar/Navbar'
import particleOptions from './particleConfig.json'

// Main Pages
const HomePage = React.lazy(() => import('./pages/home'))
const ProjectSelect = React.lazy(() => import('./pages/projectSelect'))
const ExperiencePage = React.lazy(() => import('./pages/experience'))
const Page404 = React.lazy(() => import('./pages/page404'))
// Project pages
const Crossword = React.lazy(() => import('./pages/projects/crossword'))
const DPPathfinder = React.lazy(() => import('./pages/projects/DPPathfinder'))
const ThisWebsite = React.lazy(() => import('./pages/projects/thisWebsite'))
const AutoClicker = React.lazy(() => import('./pages/projects/autoClicker'))
const EquationFinder = React.lazy(() => import('./pages/projects/equationFinder'))
const Clue = React.lazy(() => import('./pages/projects/clue'))
const ScrambleSquares = React.lazy(() => import('./pages/projects/scrambleSquares'))
const ClientManagement = React.lazy(() => import('./pages/projects/clientManagement'))
const BezierCurves = React.lazy(() => import('./pages/projects/bezier'))
const ScrapingTool = React.lazy(() => import('./pages/projects/scrapingTool'))
const VisualTesting = React.lazy(() => import('./pages/projects/visualTesting'))
const HumanDetection = React.lazy(() => import('./pages/projects/humanDetection'))

function App () {
  const particlesInit = useCallback(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
  <>
    
    <HashRouter>
      {/* <div className="min-h-screen w-full bg-gradient-to-t from-gray-100 to-gray-300 -z-10"/> */}
      <Particles options={particleOptions} init={particlesInit} loaded={particlesLoaded} className={"absolute -z-10"}/>
      <div className={"flex flex-col min-h-screen w-full items-center overflow-hidden"}>
        <Navbar/>
        <div className={'flex flex-col items-center px-2 md:w-2/3 w-full mb-16'}>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="experience" element={<ExperiencePage/>} />
                <Route path="projects/">
                  <Route path="" element={<ProjectSelect/>} />
                  <Route path="crossword" element={<Crossword/>} />
                  <Route path="dppathfinder" element={<DPPathfinder/>} />
                  <Route path="thiswebsite" element={<ThisWebsite/>} />
                  <Route path="autoclicker" element={<AutoClicker/>} />
                  <Route path="equationfinder" element={<EquationFinder/>} />
                  <Route path="clue" element={<Clue/>} />
                  <Route path="scramblesquares" element={<ScrambleSquares/>} />
                  <Route path="clientmanagement" element={<ClientManagement/>} />
                  <Route path="bezier" element={<BezierCurves/>} />
                  <Route path="scrapingtool" element={<ScrapingTool/>} />
                  <Route path="visualtesting" element={<VisualTesting/>} />
                  <Route path="humandetection" element={<HumanDetection/>}/>
                </Route>
                <Route path="*" element={<Page404/>} />
              </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
    
  </>
  )
}

export default App
