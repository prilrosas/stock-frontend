import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Registration from '../pages/Registration';
import Politica from '../pages/Politica'
import StockReport from '../pages/StockReport';
import StockUpload from '../pages/StockUpload';

const RoutesApp = () => {
    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<StockReport />} />
        <Route path="param" element={<Registration />} />
        <Route path="upload" element={<StockUpload />} />
        <Route path="report" element={<StockReport />} />
        <Route path="politica" element={<Politica />} />
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;