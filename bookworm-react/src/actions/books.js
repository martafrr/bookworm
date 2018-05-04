import { normalize } from 'normalizr';
import { BOOKS_FETCHED } from '../types';
import api from '../api';
import { bookSchema } from '../schemas';

const boooksFetched = (data) => ({
    type: BOOKS_FETCHED,
    data
})

export const fetchBooks = () => (dispatch) =>
    api.books
        .fetchAll()
        .then(books => dispatch(boooksFetched( normalize(books, [bookSchema]) )))