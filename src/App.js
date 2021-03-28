import React, { useContext } from 'react'
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Countdown } from './components';
import { AuthPage } from './components/Auth/AuthPage';
import { UserContext } from './UserContext'
function App() {

  const currentUser = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Countdown />
        <AuthPage />
        {currentUser && <p>{currentUser.email}</p>}
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
