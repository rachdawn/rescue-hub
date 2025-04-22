import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/App.css";
import TopNav from "./components/TopNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
