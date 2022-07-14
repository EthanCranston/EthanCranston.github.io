import React, { Suspense } from 'react'

// Use React.lazy to load page only when the user needs it
const HomePage = React.lazy(() => import('./home'))
const ProjectSelect = React.lazy(() => import('./projectSelect'))
const ExperiencePage = React.lazy(() => import('./experience'))
const Page404 = React.lazy(() => import('./page404'))
const Crossword = React.lazy(() => import('./projects/crossword'))
const DPPathfinder = React.lazy(() => import('./projects/DPPathfinder'))
const ThisWebsite = React.lazy(() => import('./projects/thisWebsite'))
const AutoClicker = React.lazy(() => import('./projects/autoClicker'))
const EquationFinder = React.lazy(() => import('./projects/equationFinder'))
const Clue = React.lazy(() => import('./projects/clue'))
const ScrambleSquares = React.lazy(() => import('./projects/scrambleSquares'))
const ClientManagement = React.lazy(() => import('./projects/clientManagement'))
const BezierCurves = React.lazy(() => import('./projects/bezier'))
const ScrapingTool = React.lazy(() => import('./projects/scrapingTool'))

const allPages = {
  Home: <HomePage/>,
  Projects: <ProjectSelect/>,
  Experience: <ExperiencePage/>,
  crossword: <Crossword/>,
  dppathfinder: <DPPathfinder/>,
  thiswebsite: <ThisWebsite/>,
  autoclicker: <AutoClicker/>,
  equationfinder: <EquationFinder/>,
  clue: <Clue/>,
  scramblesquares: <ScrambleSquares/>,
  clientmanagement: <ClientManagement/>,
  bezier: <BezierCurves/>,
  scrapingtool: <ScrapingTool/>
}

const CurrentPage = ({ currentRoute }) => {
  let page = allPages[currentRoute]
  if (!page) page = <Page404/>

  return (
        <Suspense fallback={<div>Loading...</div>}>
            {page}
        </Suspense>
  )
}

export default CurrentPage
