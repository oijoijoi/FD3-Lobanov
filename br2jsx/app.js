"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import BrToJsx from './components/brtojsx.js';

const string = `
Ночь, улица, фонарь, аптека,<br />
Бессмысленный и тусклый свет.<br />
Живи ещё хоть четверть века —<br/>
Всё будет так. Исхода нет.<br/>
<br/>
Умрёшь — начнёшь опять сначала<br>
И повторится всё, как встарь:<br>
Ночь, ледяная рябь канала,<br>
Аптека, улица, фонарь.<br/>
<br/>
10 октября 1912`;

ReactDOM.render(
    React.createElement(BrToJsx,{str:string}),
    document.getElementById('container')
);