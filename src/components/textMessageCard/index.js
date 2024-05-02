import { getTextMessageCardHtml } from './textMessageCardHtml';
import './textMessageCard.css';

export default class TextMessageCard {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLelement`);
    }

    this.container = container;
    this.sendTextMessageBtnOnClick = this.sendTextMessageBtnOnClick.bind(this);
    this.deleteCardBtnOnClick = this.deleteCardBtnOnClick.bind(this);

    document.querySelector('.send-text-message-btn').addEventListener('click', this.sendTextMessageBtnOnClick);
  }

  render () {
    // pass
  }

  renderMessageCardElement (textMessage) {

    const el = document.createElement('div');
    el.classList.add('text-message-card');

    const userCoords = JSON.parse(localStorage.getItem('userCoordinates'));
    console.log(userCoords);
    const position = `[${userCoords.lat}], [${userCoords.lon}]`;
    const created = Date.now();

    el.innerHTML = getTextMessageCardHtml(textMessage, position, created);

    this.container.insertBefore(el, this.container.firstChild);

    el.querySelector('.delete').addEventListener('click', this.deleteCardBtnOnClick);
  }

  sendTextMessageBtnOnClick (e) {
    const textarea = e.target.previousElementSibling;

    if (textarea.value) {
      const text = textarea.value.replace(/(\n|\r)+/g, '<br>');
      this.renderMessageCardElement(text);
      textarea.value = '';
      textarea.style.height = 'auto';
    }

    return;
  }

  deleteCardBtnOnClick (e) {
    const targetCardEl = e.target.closest('.text-message-card');
    targetCardEl.style.opacity = '0';
    setTimeout(() => {
      targetCardEl.remove()
    }, 500);
  }
}
