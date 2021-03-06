import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import fetchUtil from './utils/utils.fetch'
import { StyleSheet, css } from 'aphrodite/no-important'

let root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

class HolaComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      saludo: ''
    }
  }

  componentDidMount () {
    window.fetch('/api/hola')
      .then(fetchUtil.checkStatus)
      .then(fetchUtil.parseJSON)
      .then((data) => {
        this.setState({saludo: data.saludo})
      })
      .catch(() => this.setState({
        saludo: `Parece que tienes el servidor local apagado, mira la 
        documentación si quieres tener un servidor local para mocks y otras 
        tareas`
      }))
  }

  render () {
    return (
      <div>
        <p className={css(styles.red)}>
          HOLA ESTIMADO USUARIO DE REACT WORKSPACE
        </p>
        <p>{this.state.saludo}</p>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
})

ReactDOM.render(<HolaComponent/>, document.getElementById('root'))
