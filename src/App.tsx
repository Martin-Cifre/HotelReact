import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Site } from "./Pages/Site";
import { RoomsPage } from "./Pages/RoomsPage";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="/habitaciones" element={<RoomsPage />} />
        </Routes>
      </Router>
    );
}

export default App;