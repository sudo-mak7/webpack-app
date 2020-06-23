import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
    .text('Hello world from jQuery!')
    .css({
      textAlign: 'center',
      color: '#8383ff'
    })
    .appendTo($('header'))
  }

  render() {
    return(
      <React.Fragment>
        <header></header>

        <hr/>

        <div className="box">
          <h2 className="box-title">Box title</h2>

          <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam natus voluptate ducimus dignissimos eveniet aut, inventore enim! Minus, quisquam!</p>
        </div>
      </React.Fragment>
    )
  }
}