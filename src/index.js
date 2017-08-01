import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';

import fetchUtil from './utils/utils.fetch';

let root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

class HolaComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      saludo: `Parece que tienes el servidor local apagado, mira la 
        documentación si quieres tener un servidor local para mocks y otras 
        tareas`
    };
  }

  componentDidMount() {
    fetch('/api/hola')
      .then(fetchUtil.checkStatus)
      .then(fetchUtil.parseJSON)
      .then((data) => {
        this.setState({saludo: data.saludo})
      });
  }

  render() {
    return (
      <div>
        <p>HOLA ESTIMADO USUARIO DE REACT WORKSPACE</p>
        <p>{this.state.saludo}</p>
      </div>
    )
  }
}

ReactDOM.render(<HolaComponent/>, document.getElementById('root'));