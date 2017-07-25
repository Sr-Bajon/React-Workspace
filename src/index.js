import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(<p>REACT-WORKSPACE</p>, document.getElementById('root'));