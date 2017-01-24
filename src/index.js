import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './RecipeBox';
import User from './User';

ReactDOM.render(
  <RecipeBox
    url='http://localhost:3001/api/recipes'
    pollInterval={2000} />,
  document.getElementById('root')
);


ReactDOM.render(
  <User
    url='http://localhost:3001/api/user' />,
  document.getElementById('navbar')
);
