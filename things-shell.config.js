import editors from './src/editors';
import locales from './locales';

import icon from './assets/no-image.png';

var templates = [{
  type: 'ABC',
  description: 'abc component',
  group: 'shape', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon,
  model: {
    type: 'abc',
    width: 100,
    height: 100,
    fillStyle: 'red',
    abc: 'ABC'
  }
}];

module.exports = {
  templates,
  editors,
  locales
};
