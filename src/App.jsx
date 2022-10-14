import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="main-card">
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
