var templates = [{
  name: 'Round Button', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'shape', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'Round Button',
    model: {
      type: 'rect',
      width: 100,
      height: 100,
      text: 'SAMPLE-BUTTON',
      fillStyle: 'red'
    }
  }
}];

var editors = [{
  type: 'xxx',
  editor: require('./editors')
}];

var locales = require('./locales');

module.exports = {
  templates,
  editors,
  locales
};
