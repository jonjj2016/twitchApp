import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {
  const onAclick = e => {
    e.preventDefault();
    alert('Hi');
  };
  return (
    <Router>
      <div>
        <a onClick={onAclick} href='/'>
          ClIC
        </a>
      </div>
    </Router>
  );
};

export default App;
