import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ScrollToTop from "./components/ScrollToTop"

import HomePage from './HomePage'

import Header from './components/Header'
import Footer from './components/Footer'

// import './App.css'
// 動的にページをインポートする
const pageModules = import.meta.glob('./pages/*.tsx', { eager: true });

// 動的にルートを生成するための関数
const generateRoutes = () => {
  return Object.keys(pageModules).map((path) => {
    // ファイルパスからURLパスを決定 (例: './pages/HomePage.tsx' => '/HomePage')
    const pageName = path.split('/').pop()?.replace('.tsx', '');
    const Component = (pageModules[path] as { default: React.ComponentType }).default;

    return (
      <Route
        key={path}
        path={`/pages/${pageName}`}
        element={<Component />}
      />
    );
  });
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {generateRoutes()}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App