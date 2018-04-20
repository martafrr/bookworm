import React from 'react';

class NewBookPage extends React.Component {
  state = {
    book: null
  }

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm />
      </Segment>
    );
  }
}

export default NewBookPage;
