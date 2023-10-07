import Sidebar from './components/sidebar';
import { Route, Routes,  } from 'react-router-dom';
import Layout from './components/Layout/layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
//import Portfolio from './components/Portfolio';
import './App.scss';


function App() {
  return (
   <>
   <Sidebar/>
   <Routes>
    
    <Route path="/" element ={<Layout />}>
      <Route index element ={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="portfolio" element={<Portfolio />} /> */}
      </Route>
      </Routes>
      </>
  )
}

export default App;
