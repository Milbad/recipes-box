import React from 'react'
import Recipe from './Recipe'
import { Accordion, Panel, PageHeader} from 'react-bootstrap'

function valuesToArray(obj) {
  return Object.keys(obj).map(function (key) { return obj[key]; });
}

function RecipeList (props) {
    return (
      <div>
        <PageHeader>Recipes</PageHeader>
        <Accordion>
          {valuesToArray(props.recipes).map((recipe, index) => (
              <Panel bsStyle="info" key={index} header={recipe.title} eventKey={index+1}>
                <Recipe key={recipe.title} recipe={recipe}   onEditBtnClick={props.onEditBtnClick} onRemoveBtnClick={props.onRemoveBtnClick} />
              </Panel>
          ))}
        </Accordion>
      </div>
    )
}

export default RecipeList;
