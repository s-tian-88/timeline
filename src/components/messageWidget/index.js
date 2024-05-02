import { getMessageWidgetHtml } from './messageWidgetHtml';
import './messageWidget.css';

export default class MessageWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;

    this.textMessageTextareaOnInput = this.textMessageTextareaOnInput.bind(this);

    const textMessageBtn = document.getElementById('text-radio-btn')
    textMessageBtn.addEventListener('click', this.textMessageBtnOnClick);

  }

  render () {
    this.renderMessageWidgetElement();
  }

  renderMessageWidgetElement () {
    const el = document.createElement('div');
    el.classList.add('text-message-widget');

    el.innerHTML = getMessageWidgetHtml();
    this.container.appendChild(el);

    const textarea = el.querySelector('.text-message-textarea');
    textarea.addEventListener('input', this.textMessageTextareaOnInput);

  }

  textMessageBtnOnClick () {
    const textMessageWidgetEl = document.querySelector('.text-message-widget');
    textMessageWidgetEl.style.display = 'flex';
    document.querySelector('.widget-info').textContent = 'Text';
    setTimeout(() => {
      textMessageWidgetEl.style.opacity = '1';
    });
  }

  textMessageTextareaOnInput (e) {
    const target = e.target
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  }

};
