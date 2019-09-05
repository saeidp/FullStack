import React from 'react';
import logo from './logo.svg';
import './App.css';

import SpacingGrid from './Grids/SpacingGrid';
import CenteredGrid from './Grids/CenterGrid';

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <SpacingGrid> /> */}
      <CenteredGrid />
    </div>
  );
};

export default App;
