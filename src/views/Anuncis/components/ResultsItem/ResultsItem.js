import React from 'react';
import ServiceType from './../ServiceType/ServiceType';

const ResultsItem = ({ anunci }) => {

    return (
        <div className="itemCont box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img
                            className="is-rounded"
                            src="https://bulma.io/images/placeholders/64x64.png"
                            alt={anunci.owner.username}
                        />
                    </figure>
                    <span>{anunci.owner.username}</span>
                </div>
                <div className="media-content">
                    <div className="content">
                        {anunci.title}
                    </div>
                    <ServiceType services={anunci.services}></ServiceType>
                </div >
            </article>
        </div >
    );
}

export default ResultsItem;
