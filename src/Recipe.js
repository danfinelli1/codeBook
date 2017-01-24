import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.state= {
      toBeUpdated: false,
      title: this.props.title,
      content: this.props.children,
      language: this.props.languauge,
      mode: 'javascript'
    };
    //binding all of the functions to this class
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleRecipeUpdate = this.handleRecipeUpdate.bind(this);
  }
  updateRecipe(e) {
    e.preventDefault();
    //brings the updated file when clicked
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }
  handleRecipeUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let title = (this.state.title) ? this.state.title : null;
    let content = (this.state.content) ? this.state.content : null;
    let language = (this.state.language) ? this.state.language : null;
    let recipe = { title: title, content: content, language: language }
    this.props.onRecipeUpdate(id, recipe);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      title: '',
      content: '',
      language: ''
    })
  }
  deleteRecipe(e){
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onRecipeDelete(id);
    console.log('this is the id: ' + id);
    console.log('this is this: ' + this);
    console.log('recipe deleted');
  }
  handleContentChange(e) {
    let mode = e;
    this.setState({
        mode: mode,
        content: mode
     });
  }
  handleTitleChange(e){
    this.setState({ title: e.target.value});
  }
  handleLanguageChange(e){
    this.setState({ language: e.target.value})
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    let options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'monokai'
    };
    return (
      <div style={ style.recipe }>
        <h2>{this.props.title}</h2>
        <h3>{this.props.language}</h3>
        <pre><span dangerouslySetInnerHTML={ this.rawMarkup() } /></pre>
        <a style={ style.updateLink } href="#" onClick={ this.updateRecipe }>edit</a>
        <a style={ style.deleteLink } href="#" onClick={ this.deleteRecipe }>delete</a>
        { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleRecipeUpdate }>

              <Codemirror ref="editor" value={this.state.content} onChange={this.handleContentChange} options={options} interact={this.interact} />
              <div style={{ marginTop: 10 }}>
              </div>

              <input
                type='text'
                placeholder='Update title'
                style={ style.recipeFormTitle}
                value={ this.state.title}
                onChange={ this.handleTitleChange }/>
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
                value='Update' />
            </form>)
        : null}
      </div>
    )
  }
}

export default Recipe;
