import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';

import fetchUtil from './utils/utils.fetch';

let root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

fetch('/api/hola')
  .then(fetchUtil.checkStatus)
  .then(fetchUtil.parseJSON)
  .then((data) => {
    ReactDOM.render(
      <div>
        <p>HOLA ESTIMADO USUARIO DE REACT WORKSPACE</p>
        <p>{data.saludo}</p>
      </div>,
      document.getElementById('root'));
  })
  .catch((err) => {
    throw(err)
  });