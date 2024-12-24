import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" component={<ResetPassword/>} />
        <Route path="/" component={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;

