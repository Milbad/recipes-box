import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class DeleteButton extends Component {

  handleDeleteClick = () => {
    this.props.handleClick(this.props.title)
  }

  render() {
    return (
      <Button bsSize="large" style={{margin:10}} bsStyle="danger"  onClick={this.handleDeleteClick}>Delete</Button>
    )
  }
}

export default DeleteButton;
