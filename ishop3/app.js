"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop3 from './components/ishop3.js';

const goods = require('./goods.json');

ReactDOM.render(
    React.createElement(IShop3,{goods:goods}),
    document.getElementById('container')
);