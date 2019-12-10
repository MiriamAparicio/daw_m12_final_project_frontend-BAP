import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServiceLabel from '../../../../components/ServiceLabel/ServiceLabel';
import './PublicPost.css'

class PublicPost extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired,
    }


    render() {

        const { post } = this.props;

        return (

            <div className="columns is-multiline post-data">
                <div className="column is-9-desktop is-12-mobile">
                    <div className="post-title">
                        {post.title}
                    </div>
                    <div className="post-description">
                        {post.description}
                    </div>
                </div>
                <div className="column is-12-mobile">
                    <div className="post-services-list">
                        <label className="label">
                            Tipus de servei ofertat
                          </label>
                        <ServiceLabel
                            service="babysitter"
                            serviceStates={post.services}
                        />
                        <ServiceLabel
                            service="cleaner"
                            serviceStates={post.services}
                        />
                        <ServiceLabel
                            service="pets"
                            serviceStates={post.services}
                        />
                        <ServiceLabel
                            service="classes"
                            serviceStates={post.services}
                        />
                    </div>
                    <div className="price-label">
                        Preu/hora
                        </div>
                    <div className="post-price">
                        <span className="price-ammount">{post.price}</span> €/hora
                        </div>
                </div>
            </div>

        )
    }
}

export default PublicPost;