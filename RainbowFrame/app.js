"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameRecurs from './components/rainbowFrameRecurs.js';
import RainbowFrameCycle from './components/rainbowframeCycle.js';

const colorsArray = ['red','orange','yellow','limegreen','deepskyblue', 'blue', 'purple'];

ReactDOM.render(
    <div>
        <RainbowFrameRecurs colors={colorsArray}>
            Рекурсивный метод (создает внутри свой же объект)
        </RainbowFrameRecurs>
        <br />
        <RainbowFrameCycle colors={colorsArray}>
            Метод цикла (создает свой же объект как обертку)
        </RainbowFrameCycle>
    </div>,
    document.getElementById('container')
);