import React from 'react';
import './App.css';

import SpacingGrid from './Grids/SpacingGrid';
import CenteredGrid from './Grids/CenterGrid';
import DiscreteSlider from './Sliders/DiscreteSlider';
import Range from './Sliders/Range'
const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <SpacingGrid> /> */}
      {/* <CenteredGrid /> */}
      {/* <DiscreteSlider /> */}
      <Range />
    </div>
  );
};

export default App;
