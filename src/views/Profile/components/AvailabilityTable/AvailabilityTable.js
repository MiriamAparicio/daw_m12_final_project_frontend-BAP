import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './AvailabilityTable.css';
import { TIME_RANGES } from '../../../../utils/constants';

class AvailabilityTable extends Component {
  static propsTypes = {
    calendar: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
    handleUpdateAvailability: PropTypes.func
  };

  state = {
    calendar: {
      fh1: [false, false, false, false, false, false, false],
      fh2: [false, false, false, false, false, false, false],
      fh3: [false, false, false, false, false, false, false],
      fh4: [false, false, false, false, false, false, false],
      fh5: [false, false, false, false, false, false, false],
      fh6: [false, false, false, false, false, false, false],
      fh7: [false, false, false, false, false, false, false],
      fh8: [false, false, false, false, false, false, false]
    }
  };

  componentDidMount() {
    if (this.props.calendar) {
      this.setState({ calendar: this.props.calendar });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.readOnly !== this.props.readOnly ||
      prevProps.calendar !== this.props.calendar
    ) {
      this.setState({ calendar: this.props.calendar });
    }
  }

  handleOnClickCell = (key, index) => async e => {
    e.preventDefault();
    e.stopPropagation();

    const newState = [...this.state.calendar[key]];
    newState[index] = !this.state.calendar[key][index];

    await this.setState(prevState => ({
      calendar: {
        ...prevState.calendar,
        [key]: newState
      }
    }));

    this.props.handleUpdateAvailability(this.state.calendar);
  };

  renderTableRows() {
    return Object.keys(this.state.calendar).map(key => {
      return (
        <tr key={key}>
          <th>{TIME_RANGES[key]}</th>
          {this.state.calendar[key].map((value, index) => {
            const tdClass = classNames({
              'is-available': value
            });
            return (
              <td
                key={`${key} ${index}`}
                className={tdClass}
                onClick={
                  !this.props.readOnly
                    ? this.handleOnClickCell(key, index)
                    : null
                }
              ></td>
            );
          })}
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="is-responsive">
        <table className="table table-container is-bordered is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Dl</th>
              <th>Dt</th>
              <th>Dc</th>
              <th>Dj</th>
              <th>Dv</th>
              <th>Ds</th>
              <th>Dg</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default AvailabilityTable;
