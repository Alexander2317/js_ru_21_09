import React, { Component } from 'react';
import './style.css';

export default class FormForComment extends Component {
  state = {
    userName: '',
    textUser: '',
    errorMsg: ''
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (document.querySelector('.js-error-field')) {
      this.setState({
        errorMsg: 'invalid forms'
      })

      return;
    }

    this.setState({
      userName: '',
      textUser: '',
      errorMsg: ''
    })
  }

  handleChange = typePlace => e => {
    if (e.target.value.length > valueForm.max) {
      return;
    }

    this.setState({
      [typePlace]: e.target.value
    })
  }

  errorClass = (typePlace) => {
    if ((this.state[typePlace].length < valueForm.min)) {
      return 'js-error-field';
    }

    return '';
  }

  render() {
    const {userName, textUser, errorMsg} = this.state;

    return (
      <div>
        <br/><br/>
        <form onSubmit={this.submitHandler}>
          <strong>User:</strong> <input className={this.errorClass('userName')} type="text" value={userName}
                                        onChange={this.handleChange('userName')}/>
          <br/> <br/>

          <strong>Text:</strong> <textarea className={this.errorClass('textUser')} value={textUser}
                                           onChange={this.handleChange('textUser')}/>
          <br/> <br/>

          <input type="submit" value="Send"/>
        </form>

        <div className='js-error-text'>{errorMsg}</div>
      </div>
    );
  }
}

const valueForm = {
  max: 50,
  min: 10
}