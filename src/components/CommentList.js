import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentList extends Component {
  state = {
    isOpen: false
  }

  static propTypes = {
    comments: PropTypes.array
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const {isOpen}  = this.state;

    const text = !isOpen ? 'show' : 'hide';

    return (
      <div>
        <button onClick={this.hundlerClick}>{text} comment</button>
        {this.getComments()}
      </div>
    );
  }

  hundlerClick = (e) => {
    e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getComments = () => {
    if (!this.state.isOpen) {
      return null;
    }

    const {comments} = this.props;

    if (comments.length === 0) {
      return (<strong>No comments</strong>);
    }

    const body = comments.map(comment => <div key={comment.id}><Comment comment={comment}/></div>);

    return (
      <div>
        {body}
      </div>
    )
  }
}