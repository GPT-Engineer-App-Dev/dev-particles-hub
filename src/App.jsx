import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DevelopersList from './pages/DevelopersList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<DevelopersList />} />
      </Routes>
    </Router>
  );
}

export default App;