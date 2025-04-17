// import { Contact } from 'lucide-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { About, Contact, Home } from './pages'

const App = () => {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-700 to-black w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  {/* <Route path="/projects" element={<Projects />} /> */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
