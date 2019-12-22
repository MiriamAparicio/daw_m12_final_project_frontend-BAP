import React from 'react';
import { PropTypes } from 'prop-types';
import ServicesList from './../../ServicesList/ServicesList';
import './ResultsItem.css';
import Rating from 'react-rating';


const ResultsItem = ({ post, handlePostOnClick, id }) => {

	return (
		<div className="item-container box" onClick={handlePostOnClick} id={id}>
			<div className="user-info has-text-centered is-hidden-tablet">
				<figure className="image avatar is-96x96 post-image">
					<img
						className="is-rounded"
						src={post.owner.image || "https://bulma.io/images/placeholders/64x64.png"}
						alt={post.owner.username}
					/>
				</figure>
				<div className="user">{post.owner.username}</div>
				<div className="rating">
					{`${post.owner.avgRating} / 5 `}
					<Rating
						emptySymbol="far fa-star star"
						fullSymbol="fas fa-star star"
						initialRating={post.owner.avgRating}
						readonly />
				</div>
			</div>
			<article className="media">
				<div className="media-left is-hidden-mobile">
					<figure className="image is-64x64">
						<img
							className="is-rounded"
							src={post.owner.image || "https://bulma.io/images/placeholders/64x64.png"}
							alt={post.owner.username}
						/>
					</figure>
					<div className="user">{post.owner.username}</div>
				</div>
				<div className="media-content is-paddingless">
					<div className="post-title">
						<div className="columns is-marginless service-columns">
							<div className="column is-paddingless is-four-fifths service-column">
								{post.title}
							</div>
							<div className="column is-paddingless rating has-text-right is-hidden-mobile">
								{`${post.owner.avgRating} / 5 `}
								<Rating
									emptySymbol="far fa-star star"
									fullSymbol="fas fa-star star"
									initialRating={post.owner.avgRating}
									readonly />
							</div>
						</div>
					</div>
					<ServicesList serviceStates={post.services}></ServicesList>
				</div >
			</article>
		</div >
	);
}

ResultsItem.propTypes = {
	handlePostOnClick: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	post: PropTypes.object.isRequired,
}

export default ResultsItem;
