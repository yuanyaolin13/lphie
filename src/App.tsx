import './App.css'

import NavBar from "./components/NavBar.tsx"
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

function App() {
  return (
    <>
        <NavBar />
        <ScrollToTopButton/>
        <Hero />
        <Footer />
    </>
  );
}

export default App
