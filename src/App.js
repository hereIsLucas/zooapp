import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { Datasafety } from './Pages/Datasafety';
import Impressum from './Impressum';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/Datasafety">Datasafety</Link>
            </li>
            <li>
              <Link to="/Impressum">Impressum</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="Datasafety" element={<Datasafety />} />
            <Route path="Impressum" element={<Impressum />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;