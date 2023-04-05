import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import { Datasafety } from './Pages/Datasafety';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/Datasafety">Datasafety</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="Datasafety" element={<Datasafety />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;