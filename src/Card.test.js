import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe.only('DOM renders all elements', () => {
    it.only('Dom renders all elements', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})