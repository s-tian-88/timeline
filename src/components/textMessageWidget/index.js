import { getTextMessageWidgetInnerHtml } from './textMessageWidgetInnerHtml';
import './textMessageWidget.css';

export default class TextMessageWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;
    document.querySelector('button#text-message-btn').addEventListener('click', this.textMessageBtnOnClick);

    this.textMessageTextareaOnInput = this.textMessageTextareaOnInput.bind(this);

  }

  render () {
    this.renderMessageWidgetElement();
  }

  renderMessageWidgetElement () {
    const el = document.createElement('div');
    el.classList.add('text-message-widget');

    el.innerHTML = getTextMessageWidgetInnerHtml();
    this.container.appendChild(el);

    el.querySelector('.text-message-textarea').addEventListener('input', this.textMessageTextareaOnInput)

  }

  textMessageBtnOnClick (e) {

    const currentStream = document.querySelector('video#gum').srcObject;
    if ( currentStream ) {
      currentStream.getTracks().forEach((track) => {track.stop();});
    }

    const enableWidget = document.querySelector('.enable-widget');
    if ( enableWidget ) {
      enableWidget.style.opacity = '0';
      enableWidget.classList.remove('enable-widget');
    }

    const textMessageWidgetEl = document.querySelector('.text-message-widget');
    textMessageWidgetEl.classList.add('enable-widget');
    document.querySelector('.common-message-widget-info').textContent = 'Text';
    setTimeout(() => {
      textMessageWidgetEl.style.opacity = '1';
    });

    document.querySelectorAll('.common-widget-btn').forEach((btn) => {
      if ( btn.classList.contains('disabled-btn') ) {
        btn.classList.remove('disabled-btn')
      }
    });

    e.target.classList.add('disabled-btn');
    localStorage.setItem('messageMode', 'text');

  }

  textMessageTextareaOnInput (e) {
    const target = e.target
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  }

};
