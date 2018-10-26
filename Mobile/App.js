"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
    {id:1652, fio:"Иванов И.И.", balance:200},
    {id:1584, fio:"Сидоров С.С.", balance:250},
    {id:2541, fio:"Петров П.П.", balance:180},
    {id:3528, fio:"Григорьев Г.Г.", balance:220},
    {id:3654, fio:"Шарафанович Г.Г.", balance:-220},
    {id:8452, fio:"Сырисько Г.Г.", balance:-200},
    {id:8645, fio:"Нагорный Г.Г.", balance:120},
    {id:9879, fio:"Чернухо Г.Г.", balance:100},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

