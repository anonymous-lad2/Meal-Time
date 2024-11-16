import Header from './components/Header';
import { useState } from 'react';
import photo from './utility/food-delivery-main.webp'

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
}

export default App;
