import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubjectsK from './components/SubjectsK';
import SubjectsT from './components/SubjectsT';
import Ai from './components/Ai';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjectsk" element={<SubjectsK />} />
        <Route path="/subjectst" element={<SubjectsT />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </Router>
  );
}

export default App;