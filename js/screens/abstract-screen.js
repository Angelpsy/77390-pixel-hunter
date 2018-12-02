import {getNodesFromString} from '../utils/dom';

export default class AbstractScreen {
  constructor(state) {
    if (new.target === AbstractScreen) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }

    this.state = state;
  }

  /**
   * Abstract property. Need override in child class
   * @type {String}
   */
  get template() {
    throw new Error(`Template is required`);
  }

  /**
   * @return {HTMLElement}
   */
  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  /**
   * @return {HTMLElement}
   */
  render() {
    return getNodesFromString(this.template);
  }

  /**
   * need to get element
   */
  bind() {
    throw new Error(`Bind is required`);
  }

  /**
   * need return this.state
   */
  handlerChangeScreen() {
    throw new Error(`handlerChangeScreen is required`);
  }
}
