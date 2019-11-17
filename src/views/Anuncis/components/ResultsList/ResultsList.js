import React, { Component } from 'react';
import ResultsItem from '../ResultsItem/ResultsItem';



const data = [
    {
        owner: {
            name: 'Francesc Muñoz',
            username: 'franlol',
            avgValoration: 5
        },
        title: 'Titol anunci 1',
        description: "Hola, m'ofereixo per moltes coses",
        rang: 10,
        services: {
            cangur: true,
            classes: true,
            neteja: false,
            mascotes: true,
        },
        price: 15,
    },
    {
        owner: {
            name: 'Xavi Sánchez',
            username: 'xavixanxe',
            avgValoration: 4.5
        },
        title: 'Titol anunci 2',
        description: "Hola, jo també m'ofereixo per moltes coses",
        rang: 10,
        services: {
            cangur: false,
            classes: false,
            neteja: false,
            mascotes: true,
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
    
    resultsToComp = (results) => {
        console.log(results.length);
        return (
            results.map((anunci, index) => (
                <ResultsItem
                    key={index}
                    anunci={anunci}>
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
                        <div>S'han trobat X resultats </div>
                        {console.log(results)}
                        {this.resultsToComp(results)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultsList;

