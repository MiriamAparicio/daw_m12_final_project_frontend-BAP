import React, { Component } from 'react';
import ResultsItem from '../ResultsItem/ResultsItem';



const data = [
    {
        owner: {
            type: 1234,
            name: 'Francesc Muñoz',
            username: 'franlol',
            avgRating: 5
        },
        title: "S'ofereix professor per classes particulars",
        description: "Hola, m'ofereixo per moltes coses",
        rang: 10,
        services: {
            babysitter: false,
            classes: true,
            cleaner: false,
            pets: false,
        },
        price: 15,
    },
    {
        owner: {
            type: 6789,
            name: 'Xavi Sánchez',
            username: 'xavixanxe',
            avgRating: 3.5
        },
        title: 'Noia responsable per cangurs i neteja',
        description: "Hola, jo també m'ofereixo per moltes coses",
        rang: 10,
        services: {
            babysitter: true,
            classes: false,
            cleaner: true,
            pets: false,
        },
        price: 15,
    },
    {
        owner: {
            type: 54321,
            name: 'Miriam Aparicio',
            username: 'miriamap',
            avgRating: 4.5
        },
        title: 'Programadora per classes particulars',
        description: "Hola, jo també m'ofereixo per moltes coses",
        rang: 10,
        services: {
            babysitter: false,
            classes: true,
            cleaner: false,
            pets: false,
        },
        price: 15,
    },
];

class ResultsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: this.props.query,
            results: data,
        }
    }

    handleAdOnClick = (e) => {
        const adId = e.currentTarget.getAttribute('id');
        //TODO link to ad detail page
        console.log(adId);
    }
    
    resultsToComp = (results) => {
        return (
            results.map((ad, index) => (
                <ResultsItem
                    key={ad.owner.type}
                    id={ad.owner.type}
                    ad={ad}
                    handleAdOnClick={this.handleAdOnClick}>
                </ResultsItem>
            ))
        );
    }

    render() {


        const { results } = this.state;

        return (
            <div className="container list-cont">
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <div className="ammount">{`S'han trobat ${results.length} resultats`}</div>
                        {this.resultsToComp(results)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultsList;

