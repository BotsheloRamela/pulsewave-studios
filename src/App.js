import './App.css';
import Home from './Components/HomePage';
import Nav from './Components/NavBar/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Privacy from './Components/PrivacyPolicy/Privacy'
import Terms from './Components/Terms&Conditions/Terms'
import Quote from './Components/Quote/Quote'
import lozad from 'lozad'

function App() {

  const observer = lozad();
  observer.observe();

  return (
    <div className="App">
      
      <Nav />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/quote' component={Quote} />
        <Route path='/privacy-policy' component={Privacy} />
        <Route path='/terms-and-conditions' component={Terms} />
      </Switch>
    </div>
  );
}

export default App;
