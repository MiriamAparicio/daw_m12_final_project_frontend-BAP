import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './InfoCard.css';

class InfoCard extends Component {
  static propTypes = {
    dotColor: PropTypes.string.isRequired,
    titleKey: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stepsList: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  render() {
    const { stepsList, image, titleKey, dotColor } = this.props;
    const stepBulletClasses = classNames(
      'step-bullet',
      `step-bullet-${dotColor}`
    );
    return (
      <div className="column container info-card">
        <div className="columns">
          <div className="column ">
            <img
              src={require(`../../../../images/${image}`)}
              alt="imatge-cerca"
            />
          </div>
          <div className="column steps">
            <p className="title is-5">
              Vols <span className={`title-${dotColor}`}>{titleKey}</span>{' '}
              serveis?
            </p>
            <div className="step">
              <div className="bullet">
                <p className={stepBulletClasses}>1</p>
              </div>
              <div className="step-text">
                <p>{stepsList[0]}</p>
              </div>
            </div>
            <div className="step">
              <div className="bullet">
                <p className={stepBulletClasses}>2</p>
              </div>
              <div className="step-text">
                <p>{stepsList[1]}</p>
              </div>
            </div>
            <div className="step">
              <div className="bullet">
                <p className={stepBulletClasses}>3</p>
              </div>
              <div className="step-text">
                <p>{stepsList[2]}</p>
              </div>
            </div>
            <div className="step">
              <div className="bullet">
                <p className={stepBulletClasses}>4</p>
              </div>
              <div className="step-text">
                <p className={`step-text-${dotColor}`}>{stepsList[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCard;
