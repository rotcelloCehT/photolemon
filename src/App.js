import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// LAZY LOADING THE VIEW (increase mobile speed)
import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


// NAVBAR
import NavBar from './components/NavBar';
// HEADER
import Header from './components/Header';
// APP ANIMATION
import AppAnimation from './components/AppAnimation';
// THREE STEP
import ThreeStep from './components/ThreeStep';
//  SAFE USE
import SafeUse from './components/SafeUse';
// PRIVATE
import Private from './components/Private';

// LEAVING TO KNOW HOW TO LAZY LOAD
// const  NavBar = React.lazy(() => import('./components/NavBar'));



function App() {
  return (
    <BrowserRouter>
    <HelmetProvider>
      <div className='App'>
      <Helmet>
        <title>photolemon</title>
      </Helmet>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Header />
            <AppAnimation />
            <ThreeStep />
            <SafeUse />
            <Private />
          </Route>
          <Route render={() => <Redirect to={{pathname: '/'}} />} />
        </Switch>
      </div>
      <script> if (!crossOriginIsolated) SharedArrayBuffer = ArrayBuffer </script>
      </HelmetProvider>
    </BrowserRouter>
    
  );
}
export default App;
