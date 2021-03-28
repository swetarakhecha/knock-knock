import React, { useContext } from 'react'
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Countdown } from './components';
// import { UserContext } from './UserContext'
import Home from './pages/Home';

function App() {

  const countdownDate = new Date('April 3, 2021 00:00:00 GMT+0530').getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // const currentUser = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        {
          (distance > 0) ? <Countdown /> : <Home />
        }
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/quiz' component={Quiz} />
        </Switch>
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
