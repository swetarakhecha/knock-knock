import React, { useContext } from 'react'
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Countdown } from './components';
// import { UserContext } from './UserContext'
import Home from './pages/Home';
import Quiz from './pages/Quiz'

function App() {

  const countdownDate = new Date('April 3, 202 00:00:00 GMT+0530').getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // const currentUser = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        {
          (distance > 0) ?
            <Countdown /> :
            (<>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/quiz' exact component={Quiz} />
              </Switch>
            </>
            )
        }
      </Router>
    </div>
  );
}

export default App;
