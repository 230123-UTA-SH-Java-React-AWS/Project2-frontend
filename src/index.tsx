import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Game from './components/GameScreen/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing/Landing';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateNewGameForm from './components/CreateNewGame/CreateGame';
import LoadScreen from './components/LoadScreen/LoadScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/App" element = {<App />} />
        <Route path="/blackjack/:tableId" element = {<Game/>}/>
        <Route path="/queue/:tableId" element = {<LoadScreen/>}/>
        <Route path="/" element={<Landing />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/creategame" element = {<CreateNewGameForm/>}/>
      </Routes>
    </BrowserRouter>
    
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
