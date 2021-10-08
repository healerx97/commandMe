// import './Styles/App.css';
import {useHistory} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

//import components
import Home from './Components/Home';
import Login from './Components/Login';
import Requests from './Components/Requests';
import NavBar from './Components/NavBar';
import Signup from './Components/Signup';
import Create from './Components/Create';
import Commands from './Components/Commands';

import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser, setTasks, selectTasks} from './slices/theSlice'

function App() {
  let history = useHistory()

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  //logout-------------------------------------------------------->
  async function handleLogout() {
    const res = await fetch("/logout", {
      method: "DELETE"
    })
    if (res.ok) {
      dispatch(setUser(null))
      history.push("/login")
    }
  }
  //logout--------------------------------------------------------

  async function getUser() {
    const res = await fetch("/me")
    if (res.ok) {
      const json = await res.json()
      dispatch(setUser(json))
      history.push("/")
    }
  }
  useEffect(() => {
    
    getUser()
    getTasks()
  }, [])

  // retrieve tasks-------------------------------------------------------->
  async function getTasks() {
    const res1 = await fetch("/received")
    if (res1.ok) {
      const receivedData = await res1.json()
      const res2 = await fetch('/sent')
      if (res2.ok) {
        const sentData = await res2.json()
        dispatch(setTasks({
          received: receivedData,
          sent: sentData
        }))
      }
    }
  }



  return (
    <div className="App">
      <NavBar handleLogout={handleLogout}/>
      <Switch>
        <Route exact path = '/requests'>
          {user? <Requests/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path = '/commands'>
          {user? <Commands/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path = '/create'>
          {user? <Create/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path = "/login">
          <Login/>
        </Route>
        <Route exact path = "/signup">
          <Signup/>
        </Route>
        <Route exact path = '/'>
          {user? <Home/> : <Redirect to='/login'/>}
        </Route>

      </Switch>

    </div>
  );
}

export default App;
