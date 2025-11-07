import { useState } from 'react'
import './App.css'
// Componentes
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    // Aplicando a fonte Inter e o tema escuro
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
