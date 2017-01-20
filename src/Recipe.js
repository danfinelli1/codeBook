import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Recipe extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div style={ style.recipe }>
        <h3>{this.props.title}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>
    )
  }
}

export default Recipe;
