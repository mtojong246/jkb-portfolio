import './App.scss';
import Navigation from './components/Navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Summit from './routes/Summit/summit.component';
import LexisNexis from './routes/LexisNexis/lexis-nexis.component';
import OurWave from './routes/OurWave/our-wave.component';
import ClinicalTrials from './routes/Clinical-Trials/clinical-trials.component';
import About from './routes/About/about.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='summit' element={<Summit />} />
        <Route path='lexisnexis' element={<LexisNexis />} />
        <Route path='ourwave' element={<OurWave />} />
        <Route path='clinical-trials' element={<ClinicalTrials />} />
      </Route>
    </Routes>
  )
}

export default App;
