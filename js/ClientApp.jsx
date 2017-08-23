import React from 'react';
import {render} from 'react-dom';
const ce = React.createElement;

const myTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const myFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(myTitle, { title: 'Rick and Morty', color: 'YellowGreen' }),
    ce(myTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(myTitle, { title: 'Better Call Saul', color: 'LimeGreen' })
  );
};

render(ce(myFirstComponent), document.getElementById('app'));
