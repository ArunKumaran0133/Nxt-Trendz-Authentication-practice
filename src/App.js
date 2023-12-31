import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
export default App
