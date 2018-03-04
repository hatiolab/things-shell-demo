import { html } from '@polymer/polymer/polymer-element';
import { ThingsEditorProperty } from '@hatiolab/things-shell/things-module';

export default class AbcEditor extends ThingsEditorProperty {
  static get is() {
    return 'property-editor-abc';
  }

  static get editorTemplate() {
    return html`
    <input type="text" value="{{value::change}}">
    `;
  }

  static get styleTemplate() {
    return html`label {color:red;}`;
  }
}

customElements.define(AbcEditor.is, AbcEditor);
