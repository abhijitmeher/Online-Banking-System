import { useState } from 'react';
import  { Navigation } from './Online Banking Application/components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import "./Online Banking Application/CSS/Style.css";
import { NavigationRouter } from './Online Banking Application/pages/NavigationRouter';
import { FileORImageUpload } from './FileORImageUpload';

function App() {

  return (
    <div className="App">


        <FileORImageUpload />
        
       
    </div>
  );
} 

export default App;


