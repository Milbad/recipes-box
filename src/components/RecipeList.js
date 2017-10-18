import React, { Component } from 'react'
import Recipe from './Recipe'
import { Accordion, Panel, PageHeader} from 'react-bootstrap'

function valuesToArray(obj) {
  return Object.keys(obj).map(function (key) { return obj[key]; });
}

class RecipeList extends Component {

  render() {
    const {recipes} =this.props
    const recipes2 = valuesToArray(recipes)
    return (
      <div>
        <PageHeader>Recipes</PageHeader>
        <Accordion>
          {recipes2.map((recipe, index) => (
              <Panel bsStyle="info" key={index} header={recipe.title} eventKey={index+1}>
                <Recipe key={recipe.title} recipe={recipe}   onEditBtnClick={this.props.onEditBtnClick} onRemoveBtnClick={this.props.onRemoveBtnClick} />
              </Panel>
          ))}
        </Accordion>
      </div>
    )
  }
}

export default RecipeList;
