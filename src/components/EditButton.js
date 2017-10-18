import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class EditButton extends Component {

  handleEditClick = () => {
    this.props.handleClick(this.props.title, this.props.ingredients)
  }

  render() {
    return (
       <Button  bsSize="large" style={{margin:10}} bsStyle="info" onClick={this.handleEditClick}>Edit</Button>
    )
  }
}

export default EditButton;
