import _get from "lodash/get"
import _set from "lodash/set"

// const obj = {name: 'zhang'}
// _set(obj, 'sex', 'male')
// console.log(_get(obj, "name"))
// console.log(_get(obj, "age", 23))
// console.log(obj)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
