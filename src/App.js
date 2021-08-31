import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyNotepads from './components/MyNotepads.js'
import NotepadCard from './components/NotepadCard.js'
import FormWrapper from './components/FormWrapper.js'
import ShowNotepad from './components/ShowNotepad.js'
import { Route, Switch, withRouter } from 'react-router-dom'

 class App extends React.Component{
   componentDidMount() {
     this.props.getCurrentUser()
   }

  render() {
    const { loggedIn, notepads } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/>}
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/notepads' component={MyNotepads}/>
          <Route exact path='/notepads/new' component={FormWrapper}/>
          <Route exact path='/notepads/:id' render={props => {
              const notepad = notepads.find(notepad => notepad.id === props.match.params.id)
              return <NotepadCard notepad={notepad} {...props}/>
            }
          }/>
          <Route exact path='/notepads/:id/edit' render={props => {
              const notepad = notepads.find(notepad => notepad.id === props.match.params.id)
              return <ShowNotepad notepad={notepad} {...props}/>
            }
          }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUSer, notepads: state.myNotepads
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));