import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

function Ingredients (props) {

    return (
      <div>
          <section className='ingredients-list'>
              <ListGroup>
                <ListGroupItem header="Ingredients">
              {props.ingredients.map((ingredient, index) => (
                <ListGroupItem style={{textAlign:'left'}}  key={index}>{ingredient}</ListGroupItem>
              ))}
              </ListGroupItem>
              </ListGroup>
          </section>

      </div>
    )
}

export default Ingredients;
