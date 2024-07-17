// import { Contact } from 'lucide-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components'
import {
  // About,
  //  Projects
  Home,
} from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 w-screen h-screen relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                {/* <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
