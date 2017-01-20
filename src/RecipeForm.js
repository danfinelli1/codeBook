import React, { Component } from 'react';
import style from './style';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', content: '', language: 'JavaScript' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
  handleLanguageChange(e) {
    this.setState({ language: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`Code ${this.state.title} is in "${this.state.language}"`)
  }
  render() {
    return (
      <form style={ style.recipeForm } onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Title'
          style={ style.recipeFormTitle}
          value={ this.state.title}
          onChange={ this.handleTitleChange }/>
        <textarea
          type='text'
          placeholder='Copy your code here...'
          style={ style.recipeFormContent}
          value={ this.state.content }
          onChange={ this.handleContentChange } />
        <select
          type='text'
          style={ style.recipeFormLanguage }
          value={ this.state.language }
          onChange={ this.handleLanguageChange }>
            <option value="JavaScript">JavaScript</option>
            <option value="Ruby">Ruby</option>
            <option value="Python">Python</option>
        </select>
        <input
          type='submit'
          style={ style.recipeFormPost }
          value='Post' />
      </form>
    )
  }
}

export default RecipeForm;
