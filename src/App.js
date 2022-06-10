import React from 'react'
import { Article, Brand, CTA, Feature, Navbar} from './components';
import { Features, Blog, Footer, Header, Possibility, Whatprojectonefolder} from './containers';
import './App.css'
import './index.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatprojectonefolder />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>

  )
}

export default App