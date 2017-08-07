import React, { Component } from 'react';
import TitleValue from './TitleValue.jsx';
import Layer from './Layer.jsx';

export default class LayerInfo extends Component {
  render() {
    return (
      <div>
        {this.props.info.map((i, index) => (
            <Layer key={index} info={i}/>
          ))}

      </div>
    );
  }
}
