import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Topheader from './pages/Home/Topheader/Topheader';
import Footer from './pages/Home/Footer/Footer';
import Services from './pages/Home/Services/Services';
import Doctors from './pages/Home/Doctors/Doctors';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import Login from './Firebase/Login/Login';
import Register from './Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Topheader></Topheader>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute exact path='/servicedetails/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

