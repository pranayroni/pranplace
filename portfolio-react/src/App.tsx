import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
        <About />
        <Languages />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;