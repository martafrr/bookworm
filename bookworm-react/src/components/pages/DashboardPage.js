import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCta from '../ctas/AddBookCta';

const DashboardPage = ({ isConformed, books }) => {
  <div>
    {!isConformed && <ConfirmEmailMessage />}

    {books.length === 0 && <AddBookCta />}
  </div>
};

DashboardPage.propTypes = {
  isConformed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConformed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

extends default connect(mapStateToProps)(DashboardPage);
