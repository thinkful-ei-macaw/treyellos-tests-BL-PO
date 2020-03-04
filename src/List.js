import React from 'react';
import Card from './card.js';

function List(props) {
    const cards = props.cards.map(card =>
        <Card key={card.id} title={card.title} content={card.content}/>
        );
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cards}
                <button type="button" class="list-add-card">+Add a Card</button>
            </div>
        </section>
        
    );    
}

// use default props for tests
List.defaultProps = {
    cards: []
}

export default List;