import './App.css';
import {useHistory} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

//import components
import Home from './Components/Home';
import Login from './Components/Login';
import Requests from './Components/Requests';


function App() {
  const [user, setUser] = useState(null)

  let history = useHistory()
  



  useEffect(() => {
    async function getUser() {
      const res = await fetch("/me")
      if (res.ok) {
        const json = await res.json()
        setUser(json)
        history.push("/")
      }
    }
    getUser()
  }, [])


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path = '/requests'>
          {user? <Requests/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path = "/login">
          <Login/>
        </Route>
        <Route exact path = '/'>
          {user? <Home/> : <Redirect to='/login'/>}
        </Route>

      </Switch>

    </div>
  );
}

export default App;
