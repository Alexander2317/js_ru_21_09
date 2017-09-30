import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
  state = {
    openArticleId: null
  }

  toggleArticle = (openArticleId) => {
    if (this.memoized.get(openArticleId)) return this.memoized.get(openArticleId)
    const func = (ev) => {
      this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
      })
    }

    this.memoized.set(openArticleId, func)

    return func
  }

  memoized = new Map()

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleArticle={this.toggleArticle}/>;
  }
}