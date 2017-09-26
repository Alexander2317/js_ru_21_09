import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
  static defaultProps = {}

  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      date: PropTypes.string.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const {article, comments, isOpen, onButtonClick} = this.props;
    const body = isOpen && <section>{article.text}</section>;
    const bodyComment = isOpen && <CommentList comments={comments} />;

    return (
      <div>
        <h2>
          {article.title}
          <button onClick={onButtonClick}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h2>
        {body}
        {bodyComment}
        <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
      </div>
    )
  }
}


export default Article;