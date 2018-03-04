import { Component, RectPath, Shape } from '@hatiolab/things-scene';

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'abc',
    label: 'abc',
    name: 'abc'
  }],
  "value-property": 'abc'
}

export default class AbcComponent extends RectPath(Shape) {

  dispose() {
    super.dispose();
  }

  _draw(context) {
    var {
      top,
      left,
      height,
      width
    } = this.bounds;

    this.setState('text', this.state.abc);

    context.beginPath();

    context.rect(left, top, width, height);
  }

  get controls() { }

  get nature() {
    return NATURE;
  }
}

Component.register('abc', AbcComponent);
