import React from 'react';
import axios from 'axios';
import { Form, Dropdown } from 'semantic-ui-react';

class SearchBookForm extends React.Component {
  state = {
    query: '',
    loading: false,
    options: [],
    books: {}
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 100);
  }

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodReadsId] = book;
          options.push({
            key: book.goodReadsId,
            value: book.goodReadsId,
            text: book.title
          })
        });
        this.setState({
          loading: false,
          options: options,
          books: booksHash
        })
      });
  }

  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a book by title"
          value={this.state.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
        />
      </Form>
    );
  }
}

export default SearchBookForm;
