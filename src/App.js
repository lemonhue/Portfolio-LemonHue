import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
