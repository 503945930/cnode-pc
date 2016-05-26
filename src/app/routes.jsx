import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
import AppChild from './containers/AppChild';
import TopicAdd from './components/TopicAdd';
import UserCollect from './components/UserCollect';
import UserMessage from './components/UserMessage';


const  routes = {
  path: '/',
  component: App,
  indexRoute: { component: AppChild },
  childRoutes: [
    { path: 'topicadd', component: TopicAdd }
  ]
}

export default routes
