import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoadMore from './Components/LoadMore';
import Todo from './Components/Todo';
import SumCalculator from './Components/SumCalculator';
function App() {
  return(
    <div>
      <LoadMore/>
      <Todo/>
      <SumCalculator/>
    </div>
  )
}

export default App;
