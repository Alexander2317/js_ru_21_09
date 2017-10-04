import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

export default class DaysPickerComponent extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = e => {
    e.preventDefault();

    this.setState({
      from: null,
      to: null
    });
  }

  getBody = () => {
    const {from, to} = this.state;

    return (
      <div>
        <div className="RangeExample">
          {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
          {from && !to && <p>Please select the <strong>last day</strong>.</p>}

          {from && to &&
          <p>
            You chose from {(from).toDateString() } to
            {(to).toDateString()} <a href="." onClick={this.handleResetClick}>Reset</a>
          </p>}

          <DayPicker
            selectedDays={[from, {from, to}]}
            onDayClick={this.handleDayClick}
          />
        </div>
      </div>

    );
  }

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    );
  }
}