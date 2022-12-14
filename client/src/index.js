import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import CreateAccount from './components/CreateAccount';
import { About } from './components/About';
import LoginPage from './components/LoginPage';






const store = createStore(rootReducer, applyMiddleware(logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact_Me" element={<ContactMe/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/create_account" element={<CreateAccount/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

