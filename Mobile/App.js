"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
    {id:1, fio:"Иванов И.И.", balance:200},
    {id:2, fio:"Сидоров С.С.", balance:250},
    {id:3, fio:"Петров П.П.", balance:180},
    {id:4, fio:"Григорьев Г.Г.", balance:220},
    {id:5, fio:"Шарафанович Р.Л.", balance:-220},
    {id:6, fio:"Сырисько Д.А.", balance:-200},
    {id:7, fio:"Нагорный С.А.", balance:120},
    {id:8, fio:"Чернухо А.А.", balance:100},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

