import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Service from './pages/Home/Service/Service';
import About from './pages/Home/About/About';
import Doctor from './pages/Home/Doctor/Doctor';
import Contact from './pages/Home/Contact/Contact';
import Topheader from './pages/Home/Topheader/Topheader';
import Footer from './pages/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topheader></Topheader>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/doctors'>
            <Doctor></Doctor>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

