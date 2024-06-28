import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import IDEditor from "./Editor.jsx";

const App = () => {
  return (
    <div className="bg-[#1e1e1e] px-16 min-h-screen space-y-10">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/java" element={<IDEditor language="java" />} />
          <Route path="/cpp" element={<IDEditor language="cpp" />} />
          <Route path="/python" element={<IDEditor language="python" />} />
          <Route path="/" element={<IDEditor language="java" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
