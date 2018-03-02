import { Component, RectPath, Shape } from '@hatiolab/things-scene';

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'abc',
    label: 'abc',
    name: 'abc'
  }]
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
    } = this.model;

    context.beginPath();

    context.rect(left, top, width, height);
  }

  // _post_draw(context) {
  //   this.drawStroke(context);
  //   this.drawText(context);
  // }

  get controls() { }

  get nature() {
    return NATURE;
  }
}

Component.register('abc', AbcComponent);
