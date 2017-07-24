import React, { Component } from 'react'

export default class DisplayComponent extends Component {
  render () {
    return (
      <div><samp>{this.props.sayWhat}</samp></div>
    )
  }
}
