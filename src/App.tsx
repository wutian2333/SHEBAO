import HeaderSection from './components/HeaderSection';
import CalculatorSection from './components/CalculatorSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderSection />
      <CalculatorSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
