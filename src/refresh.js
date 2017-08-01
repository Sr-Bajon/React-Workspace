import React from 'react';
import ReactDOM from 'react-dom';

/*
  PROPS: this.props.value
    props es read only
  STATE : this.state / this.setState({...})
    state es read only y solo se puede modificar con setState

 */

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

class EjemploConClase extends React.Component {
  constructor(props) {
    // el constructor es necesario si necesitamos un state
    super(props);
    this.state = {
      ejemploState: 'pin',
      saludo      : null
    };
  }

  componentDidMount() {
    // despues de que se renderice el componente por primera vez

    // forma avanzada de setState
    this.setState((prevState, props) => ({
      saludo: (() => {
        if (prevState === null) return 'que tal'
      })()
    }));
  }

  componentWillUnmount() {
    // antes de que se borre el componente
  }

  handleClick = (txt) => {
    this.state.setState({
      saludo: txt
    });
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li onClick={() => this.handleClick('hola')}>Oculus</li>
          <li>{this.props.value}</li>
          <li>{this.state.ejemploState}</li>
        </ul>
      </div>
    );
  }
}


function EjemploComponenteFuncional(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const EjemploComponenteFuncional2 = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
)