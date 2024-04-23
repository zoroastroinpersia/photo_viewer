import './App.css';

import StateHeader from './components/pages/StateHeader';
import PhotosBody from './components/pages/PhotosBody';
import { useState } from 'react';

function App() {

  const [activePanels, setActivePanels] = useState([true, false]);

  return (
    <div className="App">
      <StateHeader activePanels={activePanels}></StateHeader>
      <PhotosBody setActivePanels={setActivePanels}></PhotosBody>
    </div>
  );
}

export default App;
