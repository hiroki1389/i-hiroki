import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'

import Header from './components/Header'
import Footer from './components/Footer'

import IHiroki from './pages/iHirioki'
import Juvenile from './pages/Juvenile'
import Research from './pages/Research'
import AttendanceChecker from './pages/AttendanceChecker'
import AutoServerUpdate from './pages/AutoServerUpdate'
import MahjongsoulTimer from './pages/MahjongsoulTimer'
import DoubleBookkeeping from './pages/DoubleBookkeeping'
// import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/IHiroki" element={<IHiroki />} />
          <Route path="/pages/Juvenile" element={<Juvenile />} />
          <Route path="/pages/Research" element={<Research />} />
          <Route path="/pages/AttendanceChecker" element={<AttendanceChecker />} />
          <Route path="/pages/AutoServerUpdate" element={<AutoServerUpdate />} />
          <Route path="/pages/MahjongsoulTimer" element={<MahjongsoulTimer />} />
          <Route path="/pages/DoubleBookkeeping" element={<DoubleBookkeeping />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App