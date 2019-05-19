import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddBookForm extends Component {
  render() {
    return (
      <Form id="contact-form" method="POST" action="/profile">
        <FormGroup>
          <Label for="book-title-label">Book Title</Label>
          <Input type="text" name="bookTitle" placeholder="Enter name of book" />
        </FormGroup>
        <FormGroup>
          <Label for="book-author-label">Author</Label>
          <Input type="text" name="author" placeholder="Enter author of book" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Genre</Label>
          <Input type="select" name="genre" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}


export default AddBookForm;
