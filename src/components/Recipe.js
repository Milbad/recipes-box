import React from 'react'
import Ingredients from './Ingredients'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

function Recipe (props) {
  
    return (
          <div>
            <div className="text-right" >
              <EditButton title={props.recipe.title} ingredients={props.recipe.ingredients} handleClick={props.onEditBtnClick}/>
              <DeleteButton  title={props.recipe.title} handleClick={props.onRemoveBtnClick}/>
            </div>
            <Ingredients ingredients={props.recipe.ingredients} />
        </div>
    )
}

export default Recipe;
