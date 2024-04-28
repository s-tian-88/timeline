import { getMainContainerHtml } from './mainContainerHtml';
import './mainContainer.css';

export default class MainContainer {
  constructor (container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;
  }

  render () {
    this.renderMainContainerElement();
  }

  renderMainContainerElement () {
    const el = document.createElement('div');
    el.classList.add('main-container');
    el.innerHTML = getMainContainerHtml();

    this.container.appendChild(el);
  }
};
