import React, { useContext, useState, useEffect } from 'react'
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Countdown, Footer } from './components';
import { UserContext } from './UserContext'
import Home from './pages/Home';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Rule from './pages/Rule';
import Leaderboard from './pages/Leaderboard';

function App() {

  const countdownDate = new Date('April 3, 2020 00:00:00 GMT+0530').getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const [day, setDay] = useState(1)
  const user = useContext(UserContext);

  useEffect(() => {
    const secondDay = new Date('April 4, 2021 00:00:00 GMT+0530').getTime();
    if (now > secondDay) {
      setDay(2);
    }
  }, [])

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
                {
                  user.currentUser && (day===1) && <Route path='/quiz' exact component={Quiz1} />
                }
                {
                  user.currentUser && (day===2) && <Route path='/quiz' exact component={Quiz2} />
                }
                {
                  !user.currentUser && <Route path='/quiz' exact component={Home} />
                }
                <Route path='/rules' exact component={Rule} />
                <Route path='/leaderboard' exact component={Leaderboard} />
              </Switch>
            </>
            )
        }
        <Footer />
      </Router>
    </div>
  );
}

export default App;
