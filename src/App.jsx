
import LandingSection from './Section/LandingSection'




import AboutMeSection from './Section/AboutMeSection'
import SkillsBar from './components/SkillsBar'
import UiUxSection from './Section/UiUxSection'

import FrontendSection from './Section/FrontendSection'
import FooterSection from './Section/FooterSection'

import { Background } from './components/Background'

import BackendSection from './Section/BackendSection'

const App = () => {
  return (
    <Background>
<div className=' flex flex-col gap-[80px]'>
  <LandingSection/>
  <AboutMeSection/>
  <SkillsBar/>
  <UiUxSection/>
 <FrontendSection/>
 {/* <BackendSection/> */}
 <FooterSection />

  
</div>
</Background>
  
 
 

  )
}

export default App
