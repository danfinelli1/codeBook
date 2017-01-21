import React, { Component } from 'react';
import Recipe from './Recipe';
import style from './style';

class RecipeList extends Component {
  render() {
    let recipeNodes = this.props.data.map(recipe => {
      return (
        <Recipe title={ recipe.title } key={ recipe['_id'] }>
          { recipe.content }
          { recipe.language }
        </Recipe>
      )
    })
    return (
      <div style={ style.recipeList }>
        { recipeNodes }
      </div>
    )
  }
}

export default RecipeList;
