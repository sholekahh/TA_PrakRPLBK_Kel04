import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import HalamanLogin from './page/login/login';
import PrivateRoute from './page/utils/PrivateRoutes';
import Notfound from './page/notfound/Notfound';
import {ListRoutes} from './page/utils/Routes';
import Dashboard from './page/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        {ListRoutes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })
        }
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<HalamanLogin/>} />
      <Route path="/ds" element={<Dashboard/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
