import { getCommonWidgetHtml } from './commonWidgetHtml';
import './commonWidget.css';

export default class CommonMessageWidget {
  constructor (container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;

  }

  render () {
    this.renderCommonWidgetElement();
  }

  renderCommonWidgetElement () {
    const el = document.createElement('div');
    el.classList.add('common-message-widget');
    el.innerHTML = getCommonWidgetHtml();

    this.container.appendChild(el);

    const commonWodgetSendBtn = el.querySelector('button#send-message-btn');


  }
}
