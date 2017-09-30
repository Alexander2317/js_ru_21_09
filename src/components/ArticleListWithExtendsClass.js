import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article';
import Accordion from '../extends/accordion';

class ArticleListWithExtendsClass extends Accordion {
  constructor() {
    super();

    this.state = {
      openArticleId: super().state.openArticleId
    }
  }

  toggleArticle(openArticleId) {
    super.toggleArticle(openArticleId)
  }

  render() {
    const {articles} = this.props
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles.map((article) => <li key={article.id}>
      <Article article={article}
               isOpen={article.id === this.state.openArticleId}
               onButtonClick={this.toggleArticle(article.id)}
      />
    </li>);

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}


ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleListWithExtendsClass