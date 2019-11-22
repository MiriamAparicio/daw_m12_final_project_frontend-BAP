import React from 'react';
import { PropTypes } from 'prop-types';
import ServicesComp from './../ServicesComp/ServicesComp';
import './ResultsItem.css';
import Rating from 'react-rating';


const ResultsItem = ({ ad, handleAdOnClick, id }) => {

    return (
        <div className="itemCont box" onClick={handleAdOnClick} id={id}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img
                            className="is-rounded"
                            src="https://bulma.io/images/placeholders/64x64.png"
                            alt={ad.owner.username}
                        />
                    </figure>
                    <div className="user">{ad.owner.username}</div>
                </div>
                <div className="media-content">
                    <div className="adTitle">
                        <div className="columns">
                            <div className="column is-four-fifths column-mobile">
                                {ad.title}
                            </div>
                            <div className="column rating has-text-right column-mobile">
                                {`${ad.owner.avgRating} / 5 `}
                                <Rating
                                    emptySymbol="far fa-star star"
                                    fullSymbol="fas fa-star star"
                                    initialRating={ad.owner.avgRating}
                                    readonly />
                            </div>
                        </div>
                    </div>
                    <ServicesComp serviceStates={ad.services}></ServicesComp>
                </div >
            </article>
        </div >
    );
}

ResultsItem.propTypes = {
    handleAdOnClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    ad: PropTypes.object.isRequired,
}

export default ResultsItem;
