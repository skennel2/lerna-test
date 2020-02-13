import React from 'react';
import sub from '@mee/sub';
import sub_ts from '@mee/sub-ts';

function App() {
  return (
    <div className="App">
      <div>
        {sub()}
      </div>
      <div>
        {sub_ts()}
      </div>
    </div>
  );
}

export default App;
