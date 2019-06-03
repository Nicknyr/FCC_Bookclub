import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bookTitle: '',
      author: '',
      genre: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    const bookTitle = this.state.bookTitle;
    const author = this.state.author;
    const genre = this.state.genre;
    //console.log("Data from form :" + data.bookTitle, data.author, data.genre);
    axios.post('/profile',{
      bookTitle: bookTitle,
      author: author,
      genre: genre
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

  }

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]:
      event.target.value
    });
  }

  render() {
    const {bookTitle} = this.state;
    const {author} = this.state;
    const {genre} = this.state;
    return (
      <div>
        <Button id="add-book-button" onClick={this.toggle}>Add Book</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
          <ModalBody>
            <Form method="POST" action="/profile" id="add-book-form" onSubmit={this.handleSubmit} >
              <FormGroup>
                <Label for="book-title-label">Book Title</Label>
                <Input
                  value={bookTitle}
                  name="bookTitle"
                  onChange={this.handleInputChange}
                  placeholder="Enter name of book" />
              </FormGroup>
              <FormGroup>
                <Label for="book-author-label">Author</Label>
                <Input
                  value={author}
                  name="author"
                  onChange={this.handleInputChange}
                  placeholder="Enter author of book" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Genre</Label>
                <Input
                  onChange={this.handleInputChange}
                  value={genre}
                  type="select"
                  name="genre"
                  id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <ModalFooter>
                <Button color="primary" type="submit" onClick={this.toggle}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddBookModal;
