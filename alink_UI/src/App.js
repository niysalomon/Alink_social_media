 import Home from './pages/home/Home';
 import Profile from './components/Profile/Profile';
 import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 function App() {
  return (
    <>
    
     <Router>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/register">
           <Register />
         </Route>
         <Route path="/profile/:username">
           <Profile />
         </Route>
       </Switch>
     </Router>     
    </>
  );
}

export default App;
