import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {selectArticle} from '../../AC';
import {connect} from 'react-redux';

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.selectArticle(selected.map(option => option.value))

    render() {
        const { articles, select } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={select}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  select: state.filters.select
});

export default connect(mapStateToProps, ({selectArticle}))(SelectFilter)