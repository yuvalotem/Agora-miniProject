import React from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Market from './components/Market';

const App = observer((props) => {
  return (
    <div className="App">
      <Market store={props.store}/>
    </div>
  );
})

export default App;
