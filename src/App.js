import React, { Component } from 'react'
import RecipeList from './components/RecipeList'
import { addRecipe, getRecipes, removeRecipe } from './utils/helpers'
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import './App.css'

class App extends Component {

  state = {
    foodModalOpen: false,
    disabledBtn:true,
    title:'',
    ingredients:[],
    recipes:{},

  }

  componentDidMount() {
      const recipes = getRecipes()
      this.setState(() => ({recipes}))
  }

  closeFoodModal = () => {
    this.setState(() => ({foodModalOpen: false}))
  }

  getValidationState = () => {
      const title = this.state.title.length
      const ingredients = this.state.ingredients.length
      if (title>0 && ingredients>0){
        return 'success'
      }
      else if (title>0 || ingredients>0){
        return 'error'
      }
  }

  handleChangeTitle = (title) => {
    const ingredients = this.state.ingredients.length
    if (title.length>0 && ingredients>0){
      this.setState(() => ({disabledBtn: false}))
    }
    else if (title.length>0 || ingredients>0){
      this.setState(() => ({disabledBtn: true}))
    }
    this.setState(() => ({title}))
  }

  handleChangeIngredients = (ingredients) => {
    const title = this.state.title.length
    if (title>0 && ingredients.length>0){
      this.setState(() => ({disabledBtn: false}))
    }
    else if (title>0 || ingredients.length>0){
      this.setState(() => ({disabledBtn: true}))
    }

    let ingredientsArray = ingredients.split(',')
    this.setState(() => ({ingredients:ingredientsArray}))
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState(() => ({title:'', ingredients:[],foodModalOpen:true}))
  }

  handleRemoveRecipe = (recipe) => {
    removeRecipe(recipe)
    const recipes = getRecipes()
    this.setState(() => ({recipes, foodModalOpen: false}))
  }

  handleEdit = (title, ingredients) => {
    this.setState(() => ({title, ingredients, foodModalOpen: true}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addRecipe(this.state.title, this.state.ingredients)
    const recipes = getRecipes()
    this.setState(() => ({recipes, foodModalOpen: false}))
  }

  closeFoodModal = () => {
    this.setState(() => ({foodModalOpen: false}))
  }

  render() {
    const { title, ingredients, recipes, disabledBtn } = this.state
    return (
      <div className="App">
        <RecipeList recipes={recipes} onRemoveBtnClick={this.handleRemoveRecipe} onEditBtnClick={this.handleEdit}/>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Add Recipe</Button>
        <Modal  show={this.state.foodModalOpen} onHide={this.closeFoodModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup validationState={this.getValidationState()}>
              <ControlLabel >Recipe</ControlLabel>
              <FormControl
                type='text'
                placeholder='Recipe name'
                id='recipe'
                value={title}
                onChange={(event) => this.handleChangeTitle(event.target.value)}>
                </FormControl>
              <ControlLabel >Ingredients</ControlLabel>
              <FormControl
                type='text'
                placeholder="Enter Ingredients, Separated, By Commas"
                id='ingredients'
                value={ingredients}
                onChange={(event) => this.handleChangeIngredients(event.target.value)}>
              </FormControl>
            </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={disabledBtn} bsStyle="primary" bsSize="large" onClick={this.handleSubmit}>Submit</Button>
        </Modal.Footer>

      </Modal>
      </div>
    )
  }
}

export default App;
