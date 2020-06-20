import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
export class BookItem extends Component {
    render() {
        const {title, excerpt} = this.props.books;
        return (
            <div>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}/>
            </div>
        )
    }
}

export default BookItem
