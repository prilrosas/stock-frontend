import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Report from '../components/Report';
import App from '../App';
import Registration from '../components/Registration';
import Upload from '../components/Upload';


const RoutesApp = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="param" element={<Registration />} />
        <Route path="upload" element={<Upload />} />
        <Route path="report" element={<Report />} />
      </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;