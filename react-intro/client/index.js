var React = require('react')
var ReactDOM = require('react-dom')

function HelloTemplate (props) {
  return (
    <div className='hello-template'>
      <div>hello {props.name}</div>
      <ChildTemplate identifier={props.name} job='dev' />
    </div>
  )
}

function ChildTemplate (props) {
  return (
    <div>hello {props.identifier}, my favourite {props.job}, from the child component</div>
  )
}

var data = { name: 'mix' }
var view = HelloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
