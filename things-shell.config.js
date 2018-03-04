var templates = [{
  name: 'ABC', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'shape', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'ABC',
    model: {
      type: 'abc',
      width: 100,
      height: 100,
      fillStyle: 'red',
      abc: 'ABC'
    }
  }
}];

import editors from './src/editors';
import locales from './locales';

module.exports = {
  templates,
  editors,
  locales
};
