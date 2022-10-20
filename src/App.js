import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TelaLogin from './components/TelaP';
import PagAudio from './components/PagAudio';

function App() {
  return (

    <Router>
      <Routes>
        <Route
          path='/'
          element={<TelaLogin/>} />
        <Route
          path='/audio'
          element={<PagAudio/>} />
      </Routes>
    </Router>

  );
}

export default App;
