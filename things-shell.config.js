var components = [{
  type: 'button',
  source: './src/button.js'
}];

var templates = [{
  name: 'Round Button', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'shape', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'button',
    width: 100,
    height: 100,
    text: 'SAMPLE-BUTTON',
    fillStyle: 'lightgray'
  }
}];

var editors = [{
  type: 'xxx',
  editor: require('./editors')
}];

var locales = require('./locales');

module.exports = {
  components,
  templates,
  editors,
  locales
};
