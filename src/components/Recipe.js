import React, { Component } from 'react'
import Ingredients from './Ingredients'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

class Recipe extends Component {

  render() {
    const {onRemoveBtnClick, recipe, onEditBtnClick} = this.props
    return (
          <div>
            <div className="text-right" >
              <EditButton title={recipe.title} ingredients={recipe.ingredients} handleClick={onEditBtnClick}/>
              <DeleteButton  title={recipe.title} handleClick={onRemoveBtnClick}/>
            </div>
            <Ingredients ingredients={recipe.ingredients} />
        </div>
    )
  }
}

export default Recipe;
