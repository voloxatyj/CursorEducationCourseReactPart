import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Post } from './components/Post'
import { Modal } from './components/Modal'
import Contracts from './components/Contracts'
import AuthForm from './components/AuthForm'
import InfiniteTimer from './components/InfiniteTimer'
import { PostWithRedux } from './components/PostWithRedux';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Switch>
          <Route 
            exact path='/basics' 
            component={() => 
            <Post author={{
              name: "Anakin skywalker",
              photo: ANAKIN_IMAGE,
              nickname: "@dart_vader"
            }}
              content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
              image={RAY_IMAGE}
              date={"26 февр."}/>}
            />
          <Route 
            exact path='/contracts'
            component={Contracts}
          />
          <Route 
            exact path='/timer'
            component={() =>
            <InfiniteTimer 
              time={4888800}
            />}
          />
          <Route 
            exact path='/authform'
            component={AuthForm}
          />
          <Route 
            exact path='/redux'
            component={PostWithRedux}
          />
          <Route 
            exact path='/modal'
            component={Modal}
          />
        </Switch>
      </Router>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
