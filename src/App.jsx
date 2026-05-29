import { useState, useEffect } from 'react';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ImpactPage from './pages/Impact/ImpactPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      if (window.location.hash === '#impact' || window.location.hash === '#') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll check for page load
    if (window.location.hash === '#impact') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isImpactPage = hash === '#impact';

  return (
    <div className="app-wrapper">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        hash={hash}
      />
      {isImpactPage ? (
        <ImpactPage />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  );
}

export default App;
