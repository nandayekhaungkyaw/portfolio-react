import React from 'react'
import LandingSection from './Section/LandingSection'



import CardEffect from './components/CardEffect'
import AboutMeSection from './Section/AboutMeSection'
import SkillsBar from './components/SkillsBar'
import UiUxSection from './Section/UiUxSection'

import UiSlider from './components/UiSlider'
import Frontend from './components/Frontend'
import FrontendSection from './Section/FrontendSection'
import FooterSection from './Section/FooterSection'

import { Background } from './components/Background'
import { BackgroundNew } from './components/BackgroundNew'

const App = () => {
  return (
    <Background>
<div className=' flex flex-col gap-[80px]'>
  <LandingSection/>
  <AboutMeSection/>
  <SkillsBar/>
  <UiUxSection/>
 <FrontendSection/>
 <FooterSection />

  
</div>
</Background>
  
 
 

  )
}

export default App
