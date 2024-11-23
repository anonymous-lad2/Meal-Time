import Header from './components/Header';
import { useState } from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import Testimonial from './components/Testimonial';
import Footer from './pages/Footer';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`scroll-w-0 ${darkTheme ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen px-8">
        <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Main/>
        <Testimonial/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;