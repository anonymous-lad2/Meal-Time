import Header from './components/Header';
import { useState } from 'react';
import photo from './utility/food-delivery-main.webp'
import img1 from './utility/homeimg1.jpg'
import img2 from './utility/homeimg2.jpg'
import img3 from './utility/homeimg3.jpg'
import img4 from './utility/homeimg4.jpg'
import Home from './pages/Home';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`scroll-w-0 ${darkTheme ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        {/* <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/> */}
        

        <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>


      </div>
    </div>
  );
}

export default App;