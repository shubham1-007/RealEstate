import Company from "./Components/Companies/Company";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import Residancy from "./Components/Residancies/residancy";
import Value from "./Components/Value/value";
import Contact from "./Components/Contact/contact";
import GetStarted from "./Components/GetStarted/getstarted";
import Footer from "./Components/Footer/footer";
import './app.css'

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Company/>
      <Residancy/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer></Footer>

    </div>
  );
}

export default App;
