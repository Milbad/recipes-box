import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class Ingredients extends Component {

  render() {
    return (
      <div>
          <section className='ingredients-list'>
              <ListGroup>
                <ListGroupItem header="Ingredients">
              {this.props.ingredients.map((ingredient, index) => (
                <ListGroupItem style={{textAlign:'left'}}  key={index}>{ingredient}</ListGroupItem>
              ))}
              </ListGroupItem>

              </ListGroup>
          </section>

      </div>
    )
  }
}

export default Ingredients;
