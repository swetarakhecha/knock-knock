import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Countdown } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Countdown />
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
