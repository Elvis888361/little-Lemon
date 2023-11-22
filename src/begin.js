import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './App';
import ReserveTable from './components/ReserveTable';
import Confirmation from './components/Confirmation';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/ReserveTable" element={<ReserveTable />} />
        <Route path="/components/Confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}