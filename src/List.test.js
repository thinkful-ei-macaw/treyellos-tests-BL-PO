import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('DOM renders all elements', () => {
    it('DOM renders all elements', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('Renders without crashes', () => {
        const tree = renderer
        .create(<List headers='my-list' cards={[
            {
                id: 1,
                title: 'myCard',
                content: 'myContent'
            }
        ]} />)
        expect(tree).toMatchSnapshot();
    })
});

