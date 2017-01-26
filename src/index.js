import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './RecipeBox';
// import UserBox from './UserBox';

ReactDOM.render(
  <RecipeBox
    url='http://localhost:3001/api/recipes'
    pollInterval={2000} />,
  document.getElementById('root')
);


//too muchhhh

// ReactDOM.render(
//   <UserBox
//     url='http://localhost:3001/api/users' />,
//   document.getElementById('navbar')
// );
