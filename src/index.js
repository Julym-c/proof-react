import React from 'react';
import {render} from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Cards from './components/cards/cards'
import Information from './components/information/display'
import Searcher from './components/searcher/searcher'

render(<Cards/>, document.querySelector('#view__cards'));
render(<Information/>, document.querySelector('#details'));
render(<Searcher/>, document.querySelector('#city__search'));

reportWebVitals();