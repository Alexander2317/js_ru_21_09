import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  render() {
    const {user, text} = this.props.comment;

    return (
      <div>
        <strong>{user}</strong>
        <div>
          {text}
        </div>
      </div>
    );
  }
}