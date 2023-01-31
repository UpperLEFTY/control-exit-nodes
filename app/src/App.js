import React, { useState } from 'react';
import {
  Routes, Route, useLocation, useNavigate, Link
} from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();
  const mainEndpoint = `${process.env.REACT_APP_API_URL}`;
  const location = useLocation();
  const siteAuthenticated = JSON.parse(sessionStorage.getItem('userAuth'));

  React.useEffect(() => {
    
      }
  
  return (
    
  );
};

export default App;
