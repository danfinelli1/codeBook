import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import DATA from '../data';
import style from './style';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div style={ style.RecipeBox }>
        <h2>Your Recipes:</h2>
      <RecipeList data={ DATA }/>
      <RecipeForm />
      </div>
    )
  }
}

export default RecipeBox;
